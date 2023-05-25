import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from '@domain/student/student.entity'
import { Repository } from 'typeorm'
import { BaseService } from '@application/base/base.service'

@Injectable()
export class StudentService extends BaseService<Student> {
  constructor(
    @InjectRepository(Student)
    protected repository: Repository<Student>,
  ) {
    super(repository)
  }

  async findOne(id: number): Promise<Student> {
    return await this.repository.findOne({
      where: { id },
      relations: ['companyStudents.company', 'courseStudents.course'],
    })
  }
}
