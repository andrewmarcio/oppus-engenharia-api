import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { Plan } from "src/@core/domain/plan/plan.entity";
import { JwtAuthGuard } from "../Auth/jwt/guard/jwt-auth.guard";
import { PlanService } from "./plan.service";

@UseGuards(JwtAuthGuard)
@Controller("plans")
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
    async create(@Body() data): Promise<Plan> {
        return await this.planService.create(data);
    }
}