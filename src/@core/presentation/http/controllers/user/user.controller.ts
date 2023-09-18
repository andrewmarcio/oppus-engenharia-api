import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { User } from '@domain/User/user.entity'
import { CreateUserDto } from '@domain/User/dto/create-user.dto'
import { UserService } from '@application/User/user.service'
import { UpdateUserDto } from '@domain/User/dto/update-user.dto'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id)
  }

  @Post('/')
  @HttpCode(201)
  async createUser(@Body() payload: CreateUserDto): Promise<User> {
    return await this.userService.create(payload)
  }

  @Put('/:id')
  async updateUser(@Param('id') id: number, @Body() payload: UpdateUserDto): Promise<User> {
    return await this.userService.update(id, payload)
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.remove(id)
  }
}
