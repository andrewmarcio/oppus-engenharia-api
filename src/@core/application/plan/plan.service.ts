import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Plan } from "src/@core/domain/plan/plan.entity";
import { Repository } from "typeorm";
import { BaseService } from "../base/base.service";

@Injectable()
export class PlanService extends BaseService<Plan> {

    constructor(
        @InjectRepository(Plan)
        protected repository: Repository<Plan>
    ){
        super(repository);
    }
}