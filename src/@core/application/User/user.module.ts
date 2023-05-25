import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@domain/User/user.entity'
import { Encrypter } from '@infra/encrypt/encrypter'
import { UserController } from '@presentation/http/controllers/user/user.controller'
import { UserService } from './user.service'
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, Encrypter],
  exports: [UserService],
})
export class UserModule {}
