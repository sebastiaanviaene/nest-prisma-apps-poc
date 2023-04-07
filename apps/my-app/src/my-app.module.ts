import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { SharedPrismaService } from '@shared/shared-app/shared.prisma.service';

@Module({
  imports: [],
  controllers: [MyAppController, UserController],
  providers: [MyAppService, UserService, PrismaService, SharedPrismaService],
})
export class MyAppModule {}
