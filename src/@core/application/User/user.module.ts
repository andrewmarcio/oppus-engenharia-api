import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/@core/domain/User/user.entity";
import { Encrypter } from "src/@core/infra/encrypt/encrypter";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, Encrypter],
    exports: [UserService]
})
export class UserModule {};