import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Plan } from '@domain/plan/plan.entity'
import { PlanController } from '@presentation/http/controllers/plan/plan.controller'
import { PlanService } from './plan.service'

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
