import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { CourseService } from '@application/course/course.service'
import { Course } from '@domain/course/course.entity'
import { CreateCourseDto } from '@domain/course/dto/create-course.dto'
import { UpdateCourseDto } from '@domain/course/dto/update-course.dto'

@Controller()
export class CourseController {
  constructor(private service: CourseService) {}

  @Get('/')
  async getCourses(): Promise<Course[]> {
    return await this.service.findAll()
  }

  @Get('/:id')
  async getCourse(@Param('id') id: number): Promise<Course> {
    return await this.service.findOne(id)
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() data: CreateCourseDto): Promise<Course> {
    return this.service.create(data as Course)
  }

  @Put('/:id')
  async updateCourse(@Param('id') id: number, @Body() data: UpdateCourseDto): Promise<Course> {
    return this.service.update(id, data)
  }
}
