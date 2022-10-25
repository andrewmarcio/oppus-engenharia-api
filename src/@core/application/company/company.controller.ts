import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { Company } from "src/@core/domain/company/company.entity";
import { JwtAuthGuard } from "../Auth/jwt/guard/jwt-auth.guard";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";


@UseGuards(JwtAuthGuard)
@Controller("companies")
export class CompanyController {

    constructor(
        private companyService: CompanyService
    ){}

    @Get("/")
    async findAll(): Promise<Company[]> {
        return await this.companyService.findAll();
    }

    @Get("/:id")
    async findOne(@Param("id") id: number): Promise<Company> {
        return await this.companyService.findOne(id);
    }
    
    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: CreateCompanyDto): Promise<Company> {
        return await this.companyService.create(data);
    }

    @Put("/:id")
    async update(@Param("id") id: number,  @Body() data: CreateCompanyDto): Promise<Company> {
        return await this.companyService.update(id, data);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteCompany(@Param('id') id: number): Promise<void> {
        await this.companyService.remove(id);
    }
}