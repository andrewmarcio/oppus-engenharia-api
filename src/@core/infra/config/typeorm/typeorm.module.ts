import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/@core/domain/User/user.entity';

export const getTypeOrmModuleOptions = (config: ConfigService): TypeOrmModuleOptions => {
  return ({
    type: 'mysql',
    host: config.get("DATABASE_HOST"),
    port: config.get("DATABASE_PORT"),
    username: config.get("DATABASE_USER"),
    password: config.get("DATABASE_PASSWORD"),
    database: config.get("DATABASE_DB"),
    entities: [User],
    synchronize: false,
    // schema: process.env.DATABASE_SCHEMA,
    ssl: {
      rejectUnauthorized: false,
    },
  } as TypeOrmModuleOptions);
}

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule { }