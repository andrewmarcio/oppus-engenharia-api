import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CourseModule } from '@domain/course/module/course-module.entity'
import { CourseModuleController } from '@presentation/http/controllers/course/course-module.controller'
import { CourseModuleService } from './course-module.service'
import { ModuleLessonModule } from './lesson/module-lesson.module'

@Module({
  controllers: [CourseModuleController],
  imports: [TypeOrmModule.forFeature([CourseModule]), ModuleLessonModule],
  providers: [CourseModuleService],
  exports: [CourseModuleService],
})
export class CourseModuleModule {}
