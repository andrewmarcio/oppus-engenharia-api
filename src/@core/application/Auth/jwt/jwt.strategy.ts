import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Constants } from '@infra/config/constant/constants'
import { JwtStrategyPayload } from '@domain/auth/jwt/jwt.strategy.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Constants.getJwtSecret(),
    })
  }

  async validate(payload: JwtStrategyPayload) {
    return { id: payload.sub, email: payload.email }
  }
}
