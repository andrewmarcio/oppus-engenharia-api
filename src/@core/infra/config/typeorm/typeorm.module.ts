import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { EnvironmentModule } from '../environment/environment.module'
import { EnvironmentService } from '../environment/environment.service'
import { User } from '@domain/User/user.entity'
import { Course } from '@domain/course/course.entity'
import { Company } from '@domain/company/company.entity'
import { CourseModule } from '@domain/course/module/course-module.entity'
import { ModuleLesson } from '@domain/course/module/lesson/module-lesson.entity'
import { Plan } from '@domain/plan/plan.entity'
import { Student } from '@domain/student/student.entity'
import { CompanyStudent } from '@domain/company/student/company-student.entity'
import { CourseStudent } from '@domain/course/student/course-student.entity'

export const getTypeOrmModuleOptions = (config: EnvironmentService): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [
      User,
      Company,
      Course,
      CourseModule,
      ModuleLesson,
      Plan,
      Student,
      CompanyStudent,
      CourseStudent,
    ],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    ssl: {
      rejectUnauthorized: false,
    },
    logging: true,
  } as TypeOrmModuleOptions
}

@Module({
  imports: [
    EnvironmentModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
