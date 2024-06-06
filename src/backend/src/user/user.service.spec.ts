import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prismaServiceMock: any;

  beforeEach(async () => {
    prismaServiceMock = {
      user: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: prismaServiceMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      prismaServiceMock.user.findUnique.mockResolvedValue(null);
      prismaServiceMock.user.create.mockResolvedValue({ id: 1, email: 'test@example.com', companyIdentifier: 'test-company' });

      const user = await service.createUser('test@example.com', 'test-company');

      expect(user).toEqual({ id: 1, email: 'test@example.com', companyIdentifier: 'test-company' });
      expect(prismaServiceMock.user.findUnique).toHaveBeenCalledWith({ where: { companyIdentifier: 'test@example.com-test-company' } });
      expect(prismaServiceMock.user.create).toHaveBeenCalledWith({ data: { email: 'test@example.com', companyIdentifier: 'test@example.com-test-company' } });
    });

    it('should not create a new user if already exists', async () => {
      prismaServiceMock.user.findUnique.mockResolvedValue({ id: 1, email: 'test@example.com', companyIdentifier: 'test-company' });

      const user = await service.createUser('test@example.com', 'test-company');

      expect(user).toBeUndefined();
      expect(prismaServiceMock.user.findUnique).toHaveBeenCalledWith({ where: { companyIdentifier: 'test@example.com-test-company' } });
      expect(prismaServiceMock.user.create).not.toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should find a user successfully', async () => {
      const mockUser = { id: 1, email: 'test@example.com', companyIdentifier: 'test-company' };
      prismaServiceMock.user.findUnique.mockResolvedValue(mockUser);

      const user = await service.getUserByCompanyIdentifier('test-company');

      expect(user).toEqual(mockUser);
      expect(prismaServiceMock.user.findUnique).toHaveBeenCalledWith({ where: { companyIdentifier: 'test-company' } });
    });

    it('should throw NotFoundException if user is not found', async () => {
      prismaServiceMock.user.findUnique.mockResolvedValue(null);

      await expect(service.getUserByCompanyIdentifier('test-company')).rejects.toThrow(NotFoundException);
      expect(prismaServiceMock.user.findUnique).toHaveBeenCalledWith({ where: { companyIdentifier: 'test-company' } });
    });
  });
});
