import { Module } from '@nestjs/common';
import { LinkListsService } from './link-lists.service';
import { LinkListsController } from './link-lists.controller';
import { PrismaService } from '../prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';
import { UserModule } from '../user/user.module';
import { UserService } from 'src/user/user.service';

import {
  headersMatch,
  atLeastOneRecord,
  csvRecordValidName,
  csvRecordValidEmail,
  csvRecordValidPhone,
  csvRecordValidCpf,
} from './utils/csv.specification';

@Module({
  imports: [
    MulterModule.register({
      dest: './dist/temp/file-uploads',
    }),
  ],
  controllers: [LinkListsController],
  providers: [
    LinkListsService,
    PrismaService,
    headersMatch,
    atLeastOneRecord,
    csvRecordValidName,
    csvRecordValidEmail,
    csvRecordValidPhone,
    csvRecordValidCpf,
    RabbitMQService,
    UserModule,
    UserService,
  ],
  exports: [PrismaService],
})
export class LinkListsModule {}
