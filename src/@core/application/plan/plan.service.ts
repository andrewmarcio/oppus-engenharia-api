import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Plan } from '@domain/plan/plan.entity'
import { Repository } from 'typeorm'
import { BaseService } from '@application/base/base.service'

@Injectable()
export class PlanService extends BaseService<Plan> {
  constructor(
    @InjectRepository(Plan)
    protected repository: Repository<Plan>,
  ) {
    super(repository)
  }
}
