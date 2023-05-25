import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { Constants } from '@infra/config/constant/constants'
import { Encrypter } from '@infra/encrypt/encrypter'
import { UserModule } from '@application/User/user.module'
import { AuthController } from '@presentation/http/controllers/auth/auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt/jwt.strategy'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.getJwtSecret(),
      signOptions: { expiresIn: Constants.getJwtExpiresAt().concat('s') },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, Encrypter, JwtStrategy],
})
export class AuthModule {}
