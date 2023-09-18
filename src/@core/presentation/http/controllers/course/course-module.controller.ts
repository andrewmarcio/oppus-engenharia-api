import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { CourseModule } from '@domain/course/module/course-module.entity'
import { UpdateLessonDto } from '@domain/course/module/lesson/dto/update-lesson.dto'
import { CourseModuleService } from '@application/course/module/course-module.service'
import { CreateCourseModuleDto } from '@domain/course/module/dto/create-course-module.dto'

@Controller()
export class CourseModuleController {
  constructor(private service: CourseModuleService) {}

  @Get('/')
  async getModules(): Promise<CourseModule[]> {
    return await this.service.findAll()
  }

  @Get('/:id')
  async getModule(@Param('id') id: number): Promise<CourseModule> {
    return await this.service.findOne(id)
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateCourseModuleDto): Promise<CourseModule[]> {
    const { course_id: id, modules } = data
    return this.service.createMany(id, modules)
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: UpdateLessonDto): Promise<CourseModule> {
    return this.service.update(id, data)
  }
}
