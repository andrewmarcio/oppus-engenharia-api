import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { BaseService } from '@application/base/base.service'
import { CourseModule } from '@domain/course/module/course-module.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CourseModuleService extends BaseService<CourseModule> {
  constructor(
    @InjectRepository(CourseModule)
    protected repository: Repository<CourseModule>,
  ) {
    super(repository)
  }

  async findOne(id: number): Promise<CourseModule> {
    return await this.repository.findOne({ where: { id }, relations: ['course', 'lessons'] })
  }

  async createMany(course_id: number, payload: CourseModule[]) {
    const data = payload.map(module => ({ course_id, name: module.name, active: true }))
    const modules = await this.repository.create(data)

    return await this.repository.save(modules)
  }
}
