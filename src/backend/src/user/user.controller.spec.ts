import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    it('should return user when user is found', async () => {
      const mockUser: User = { id: 1, email: 'johndoe@email.com', companyIdentifier: 'abc123' };
      jest.spyOn(userService, 'getUserByCompanyIdentifier').mockResolvedValue(mockUser);

      const result = await controller.getUserByCompanyIdentifier('abc123');
      
      expect(result).toEqual(mockUser);
      expect(userService.getUserByCompanyIdentifier).toHaveBeenCalledWith('abc123');
    });

    it('should return null when user is not found', async () => {
      jest.spyOn(userService, 'getUserByCompanyIdentifier').mockResolvedValue(null);

      const result = await controller.getUserByCompanyIdentifier('nonExistentCompanyIdentifier');
      
      expect(result).toBeNull();
      expect(userService.getUserByCompanyIdentifier).toHaveBeenCalledWith('nonExistentCompanyIdentifier');
    });

    it('should throw an error when an exception occurs', async () => {
      jest.spyOn(userService, 'getUserByCompanyIdentifier').mockRejectedValue(new Error('Test error'));

      await expect(controller.getUserByCompanyIdentifier('someCompanyIdentifier')).rejects.toThrowError('Test error');
      expect(userService.getUserByCompanyIdentifier).toHaveBeenCalledWith('someCompanyIdentifier');
    });
  });
});
