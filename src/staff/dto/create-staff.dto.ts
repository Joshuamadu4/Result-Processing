import { IsNotEmpty, IsString, IsEmail, IsDateString } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsString()
  staffId: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  DateOfBirth: Date;

  @IsNotEmpty()
  Qualifications: string;

  @IsNotEmpty()
  PhoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
