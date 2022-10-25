import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "src/@core/domain/company/company.entity";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {

    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
    ){}

    async findAll(): Promise<Company[]> {
        return await this.companyRepository.find();
    }

    async findOne(id: number): Promise<Company> {
        return await this.companyRepository.findOneByOrFail({ id });
    }

    async create(payload: CreateCompanyDto): Promise<Company> {
        const company = await this.companyRepository.create(payload);
        return await this.companyRepository.save(company);
    }

    async update(id: number, payload: UpdateCompanyDto): Promise<Company> {
        await this.companyRepository.update(id, payload);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.companyRepository.delete(id);
    }
} 