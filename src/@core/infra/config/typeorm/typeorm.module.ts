import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Company } from 'src/@core/domain/company/company.entity';
import { User } from 'src/@core/domain/User/user.entity';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

export const getTypeOrmModuleOptions = (config: EnvironmentService): TypeOrmModuleOptions => {
  
  return ({
    type: 'mysql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [User, Company],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    ssl: {
      rejectUnauthorized: false,
    },
  } as TypeOrmModuleOptions);
}

@Module({
  imports: [
    EnvironmentModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule { }