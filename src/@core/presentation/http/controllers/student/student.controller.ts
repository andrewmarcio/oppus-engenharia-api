import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { StudentService } from '@application/student/student.service'
import { Student } from '@domain/student/student.entity'

@Controller('students')
export class StudentController {
  constructor(public service: StudentService) {}

  @Get('/')
  async getAll(): Promise<Student[]> {
    return await this.service.findAll()
  }

  @Get('/:id')
  async getOne(@Param('id') id: number): Promise<Student> {
    return await this.service.findOne(id)
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: any): Promise<Student> {
    return await this.service.create(data)
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: any): Promise<Student> {
    return await this.service.update(id, data)
  }
}
