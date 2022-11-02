import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Plan } from "src/@core/domain/plan/plan.entity";
import { PlanController } from "../../infra/http/controllers/plan/plan.controller";
import { PlanService } from "./plan.service";

@Module({
    imports: [TypeOrmModule.forFeature([Plan])],
    controllers: [PlanController],
    providers: [PlanService],
})
export class PlanModule {}