import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, company: string): Promise<User> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: {
          companyIdentifier: `${email}-${company}`,
        },
      });
  
      if (existingUser) {
        return;
      }
  
      const user = await this.prisma.user.create({
        data: {
          email: email,
          companyIdentifier: `${email}-${company}`
        },
      });
  
      return user;
    }
    catch (error) {
      throw new NotFoundException('User not created.');
    }
  }

  async getUserByCompanyIdentifier(companyIdentifier: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        companyIdentifier: companyIdentifier,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const user = await this.prisma.user.findMany();

      return user;
    }
    catch (error) {
      throw new NotFoundException('No users was found.');
    }
  }
}
