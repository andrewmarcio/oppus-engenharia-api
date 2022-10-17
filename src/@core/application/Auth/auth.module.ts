import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Constants } from "src/@core/infra/config/constant/constants";
import { Encrypter } from "src/@core/infra/encrypt/encrypter";
import { UserModule } from "../User/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt/jwt.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: Constants.getJwtSecret(),
            signOptions: { expiresIn: Constants.getJwtExpiresAt() },
          })
    ],
    controllers: [AuthController],
    providers: [
        AuthService, 
        Encrypter,
        JwtStrategy
    ]
})
export class AuthModule {}