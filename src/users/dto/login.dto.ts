import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ example: "johndoe", description: 'The username of the user' })
  readonly username: string;

  @IsString()
  @ApiProperty({ example: "12345678", description: 'The password of the user' })
  readonly password: string;

}
