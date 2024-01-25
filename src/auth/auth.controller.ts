import { Controller, Get, UseGuards, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/users/dto/login.dto';
import { UserToken } from 'src/users/entities/user-token.entity';

@ApiTags('users')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: Request & { user: any }) {
      return req.user;
    }

    @UseGuards(LocalAuthGuard)
    @ApiBody({ 
      type: LoginDto

     })
    @ApiResponse({
      status: 200,
      description: 'And object containing the user and token',
      type: UserToken,
    })
    @Post('login')
    async login(@Request() req : Request & { user: any }) {
      return this.authService.login(req.user);
    }
  
}




