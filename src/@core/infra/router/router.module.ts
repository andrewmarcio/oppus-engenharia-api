import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'
import { AuthModule } from '@application/Auth/auth.module'
import { CompanyModule } from '@application/company/company.module'
import { CourseModule } from '@application/course/course.module'
import { CourseModuleModule } from '@application/course/module/course-module.module'
import { ModuleLessonModule } from '@application/course/module/lesson/module-lesson.module'
import { PlanModule } from '@application/plan/plan.module'
import { UserModule } from '@application/User/user.module'
import { StudentModule } from '@application/student/student.module'

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/auth',
        module: AuthModule,
      },
      {
        path: '/users',
        module: UserModule,
      },
      {
        path: '/companies',
        module: CompanyModule,
      },
      {
        path: '/plans',
        module: PlanModule,
      },
      {
        path: '/students',
        module: StudentModule,
      },
      {
        path: '/courses',
        module: CourseModule,
        children: [
          {
            path: '/modules',
            module: CourseModuleModule,
            children: [
              {
                path: '/lessons',
                module: ModuleLessonModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class RoutesModule {}
