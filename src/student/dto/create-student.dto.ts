// create-student.dto.ts

import { IsString, IsInt, IsNotEmpty, IsDateString, IsPhoneNumber, IsEnum } from 'class-validator';

enum Gender {
  Male = 'male',
  Female = 'female',
}

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly middleName: string;

  @IsNotEmpty()
  @IsString()
  readonly otherNames: string;

  
  readonly age: number;

  @IsNotEmpty()
  @IsEnum(Gender)
  readonly gender: Gender;

  @IsNotEmpty()
  @IsString()
  readonly lgaOfOrigin: string;

  @IsNotEmpty()
  @IsString()
  readonly stateOfOrigin: string;

  // @IsNotEmpty()
  // @IsFile()
  readonly medicalReport: any; 

  @IsNotEmpty()
  @IsPhoneNumber('NG') 
  readonly parentsNumber: string;

  @IsNotEmpty()
  @IsString()
  readonly parentsAddress: string;

  @IsNotEmpty()
  @IsDateString()
  readonly DateofBirth: Date;

  // @IsNotEmpty()
  // @IsFile()
  readonly birthCertificate: any; 

  @IsNotEmpty()
  @IsString()
  readonly studentClass: string;

  // @IsNotEmpty()
  // @IsFile()
  readonly picture: any; 
}