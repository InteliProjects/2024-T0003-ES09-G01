import { Test, TestingModule } from '@nestjs/testing';
import { LinkListsController } from './link-lists.controller';
import { LinkListsService } from './link-lists.service';

const mockUploadedFile = {
  fieldname: 'file',
  originalname: 'file_model.csv',
  encoding: '7bit',
  mimetype: 'text/csv',
  destination: '../mocked-file/file_model.csv',
};

const mockLinkListsService = {
  uploadFile: jest.fn((file) => {
    return Promise.resolve({
      data: {
        message: 'Dados do CSV salvos no banco de dados com sucesso.',
        data: 'Mocked Data',
      },
      message: 'Dados do CSV salvos no banco de dados com sucesso.',
    });
  }),
};

describe('LinkListsController', () => {
  let controller: LinkListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkListsController],
      providers: [
        { provide: LinkListsService, useValue: mockLinkListsService },
      ],
    }).compile();

    controller = module.get<LinkListsController>(LinkListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('uploadFile()', () => {
    it('should upload a file', async () => {
      const file = mockUploadedFile as any;

      const result = await controller.uploadFile(file);

      expect(mockLinkListsService.uploadFile).toHaveBeenCalledWith(file);

      expect(result).toEqual({
        data: {
          data: {
            message: 'Dados do CSV salvos no banco de dados com sucesso.',
            data: 'Mocked Data',
          },
          message: 'Dados do CSV salvos no banco de dados com sucesso.',
        },
        message: 'Dados do CSV salvos no banco de dados com sucesso.',
      });
    });
  });
});
