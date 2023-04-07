import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../prisma/generated/prisma-client-js';
import { SharedPrismaService } from '@shared/shared-app/shared.prisma.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly sharedPrismaService: SharedPrismaService,
  ) {}

  @Post()
  async createUser(): Promise<User> {
    const count = await this.sharedPrismaService.shared.count();
    return this.userService.createUser({
      email: `seb${count}@gmail.com`,
      name: 'seb',
    });
  }
}
