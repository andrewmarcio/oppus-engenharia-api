import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { Token } from "src/@core/domain/auth/auth.interface";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "./jwt/guard/jwt-auth.guard";

@Controller("auth")
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    async login(@Body() payload: LoginDto): Promise<Token>{
        try {
            return this.authService.login(payload);
        } catch (error) {
            throw new error;
        }
    }
}