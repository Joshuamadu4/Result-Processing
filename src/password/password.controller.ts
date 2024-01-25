import { Body, Controller, Post } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {

    constructor(private passwordService: PasswordService) { }

    @Post('forgot')
    async forgotpassword(
        @Body('email') email: string
        ){
            const token = Math.random().toString(20).substring(2, 12);

            await this.passwordService.createPassword({
                email,
                token
            })
 

    }
}
