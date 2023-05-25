import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from '@domain/student/student.entity'
import { StudentController } from '@presentation/http/controllers/student/student.controller'
import { StudentService } from './student.service'

@Module({
  controllers: [StudentController],
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [StudentService],
  providers: [StudentService],
})
export class StudentModule {}
