import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Company } from '@domain/company/company.entity'
import { CompanyController } from '@presentation/http/controllers/company/company.controller'
import { CompanyService } from './company.service'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
