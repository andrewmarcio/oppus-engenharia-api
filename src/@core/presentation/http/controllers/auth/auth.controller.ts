import { Body, Controller, Post } from '@nestjs/common'
import { Token } from '@domain/auth/auth.interface'
import { AuthService } from '@application/Auth/auth.service'
import { LoginDto } from '@domain/auth/dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() payload: LoginDto): Promise<Token> {
    try {
      return this.authService.login(payload)
    } catch (error) {
      throw new error()
    }
  }
}
