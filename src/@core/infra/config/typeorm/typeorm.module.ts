import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Company } from 'src/@core/domain/company/company.entity';
import { Course } from 'src/@core/domain/course/course.entity';
import { CourseModule } from 'src/@core/domain/course/module/course-module.entity';
import { ModuleLesson } from 'src/@core/domain/course/module/lesson/module-lesson.entity';
import { Plan } from 'src/@core/domain/plan/plan.entity';
import { User } from 'src/@core/domain/User/user.entity';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

export const getTypeOrmModuleOptions = (config: EnvironmentService): TypeOrmModuleOptions => {
  
  return ({
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
      Plan
    ],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    ssl: {
      rejectUnauthorized: false,
    },
    logging: true
  } as TypeOrmModuleOptions);
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
export class TypeOrmConfigModule { }