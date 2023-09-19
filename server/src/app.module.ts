import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { IamModule } from './iam/iam.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule, PrismaModule, UsersModule, IamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}