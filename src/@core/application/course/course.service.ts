import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Course } from '@domain/course/course.entity'
import { Repository } from 'typeorm'
import { BaseService } from '@application/base/base.service'

@Injectable()
export class CourseService extends BaseService<Course> {
  constructor(
    @InjectRepository(Course)
    protected repository: Repository<Course>,
  ) {
    super(repository)
  }

  async findOne(id: number): Promise<Course> {
    return await this.repository.findOne({ where: { id }, relations: ['modules'] })
  }
}
