import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreatePlanDto } from "src/@core/domain/plan/dto/create-plan.dto";
import { Plan } from "src/@core/domain/plan/plan.entity";
import { JwtAuthGuard } from "../../../../application/Auth/jwt/guard/jwt-auth.guard";
import { PlanService } from "../../../../application/plan/plan.service";

@UseGuards(JwtAuthGuard)
@Controller()
export class PlanController {

    constructor(
        private planService: PlanService
    ){}

    @Get("/")
    async getAllPlans(): Promise<Plan[]> {
        return await this.planService.findAll();
    }

    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: CreatePlanDto): Promise<Plan> {
        return await this.planService.create(data as Plan);
    }

    @Put("/:id")
    @HttpCode(HttpStatus.CREATED)
    async update(@Param("id") id: number, @Body() data: CreatePlanDto): Promise<Plan> {
        return await this.planService.update(id, data);
    }
}