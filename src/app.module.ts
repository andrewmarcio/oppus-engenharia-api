import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmConfigModule } from '@infra/config/typeorm/typeorm.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from '@application/User/user.module'
import { AuthModule } from '@application/Auth/auth.module'
import { CompanyModule } from '@application/company/company.module'
import { PlanModule } from '@application/plan/plan.module'
import { CourseModule } from '@application/course/course.module'
import { CourseModuleModule } from '@application/course/module/course-module.module'
import { ModuleLessonModule } from '@application/course/module/lesson/module-lesson.module'
import { StudentModule } from '@application/student/student.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmConfigModule,
    AuthModule,
    UserModule,
    CompanyModule,
    PlanModule,
    CourseModule,
    CourseModuleModule,
    ModuleLessonModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
