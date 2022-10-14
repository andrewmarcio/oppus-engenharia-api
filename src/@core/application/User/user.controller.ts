import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { User } from "src/@core/domain/User/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

    constructor(
        private userService: UserService
    ){}

    @Get("/")
    async getAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get("/:id")
    async getUser(@Param('id') id: number): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Post("/")
    @HttpCode(201)
    async createUser(@Body() payload: CreateUserDto): Promise<User> {
        return await this.userService.create(payload);
    }

    @Delete("/:id")
    @HttpCode(204)
    async deleteUser(@Param('id') id: number): Promise<void> {
        await this.userService.remove(id);
    }
}