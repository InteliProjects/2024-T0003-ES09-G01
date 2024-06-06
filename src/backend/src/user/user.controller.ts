import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  createUser(
    @Body() userData: CreateUserDto
  ): Promise<User> {
    const { email, company } = userData;
    return this.userService.createUser(email, company);
  }

  @Get('getUserByCompanyIdentifier')
  getUserByCompanyIdentifier(
    @Query('companyIdentifier') companyIdentifier: string,
  ): Promise<User | null> {
    return this.userService.getUserByCompanyIdentifier(companyIdentifier);
  }

  @Get('getAllUsers')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
