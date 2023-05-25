import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ModuleLesson } from '@domain/course/module/lesson/module-lesson.entity'
import { ModuleLessonController } from '@presentation/http/controllers/course/module-lesson.controller'
import { ModuleLessonService } from './module-lesson.service'

@Module({
  controllers: [ModuleLessonController],
  imports: [TypeOrmModule.forFeature([ModuleLesson])],
  providers: [ModuleLessonService],
  exports: [ModuleLessonService],
})
export class ModuleLessonModule {}
