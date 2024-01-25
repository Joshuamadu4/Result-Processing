import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './users/entities/user.entity';
import { Student } from './student/entities/student.entity';
import { StudentModule } from './student/student.module';
import {studentSubject } from './student/entities/studentSubject.entity';
import { SubjectsModule } from './subjects/subjects.module';
import { MulterModule } from '@nestjs/platform-express';
import { Subject } from './subjects/entities/subject.entity';
import { StaffModule } from './staff/staff.module';
import { Staff } from './staff/entities/staff.entity';
import { ResultModule } from './result/result.module';
import { PasswordModule } from './password/password.module';
import { PasswordEntity } from './password/entities/password.entity';




@Module({
  imports: [AuthModule, UsersModule, StudentModule,
    MulterModule.register({
      'dest': './uploads',
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', 
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities:[UserEntity, Student, studentSubject, Subject, Staff, PasswordEntity],
        synchronize: false,
        autoLoadEntities: true,
      })

  }),
    SubjectsModule,
    StaffModule,
    ResultModule,
    PasswordModule
      
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
