import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Token } from "src/@core/domain/auth/auth.interface";
import { User } from "src/@core/domain/User/user.entity";
import { Encrypter } from "src/@core/infra/encrypt/encrypter";
import { UserService } from "../User/user.service";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from '@nestjs/jwt';
import { Constants } from "src/@core/infra/config/constant/constants";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private encrypter: Encrypter,
        private jwtService: JwtService
    )
    {}

    async login(credentials: LoginDto): Promise<Token> {
        
        const user = await this.validateUser(credentials);

        const payload = {
            email: user.email,
            name: user.name,
            sub: user.id
        }

        return {
            access_token: this.jwtService.sign(payload),
            expires_at: Constants.getJwtExpiresAt()
        }
    }


    private async validateUser(credentials: LoginDto): Promise<User>
    {
        const user = await this.userService.getByEmail(credentials.email);
        
        if(user && await this.encrypter.check(credentials.password, user.password)){
            return user;
        }
        
        throw new HttpException({
            status: HttpStatus.UNAUTHORIZED,
            error: "Wrong credentials"
        }, HttpStatus.UNAUTHORIZED)
    }
}