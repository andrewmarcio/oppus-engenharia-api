import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigModule } from './@core/infra/config/typeorm/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './@core/application/User/user.module';
import { AuthModule } from './@core/application/Auth/auth.module';
import { CompanyModule } from './@core/application/company/company.module';
import { PlanModule } from './@core/application/plan/plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmConfigModule,
    AuthModule,
    UserModule,
    CompanyModule,
    PlanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
