import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from '@domain/course/course.entity'
import { CourseController } from '@presentation/http/controllers/course/course.controller'
import { CourseService } from './course.service'
import { CourseModuleModule } from './module/course-module.module'

@Module({
  controllers: [CourseController],
  imports: [TypeOrmModule.forFeature([Course]), CourseModuleModule],
  exports: [CourseService],
  providers: [CourseService],
})
export class CourseModule {}
