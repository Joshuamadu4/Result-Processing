import { Module } from '@nestjs/common';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordEntity } from './entities/password.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports:[
    TypeOrmModule.forFeature([PasswordEntity]),
    // MailerModule.forRoot({
    //   transport: {
        
    //   }
    // })
  




],
  controllers: [PasswordController],
  providers: [PasswordService]
})
export class PasswordModule {}
