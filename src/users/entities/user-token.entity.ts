import { ApiProperty } from '@nestjs/swagger';
//import { User } from '../users.service';

export class UserToken {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //user: User;

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY5NjE2MzQyOS',
    description: 'The jwt token',
  })
  access_token: string;
}