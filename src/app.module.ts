import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigModule } from './@core/infra/config/typeorm/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './@core/application/User/user.module';
import { AuthModule } from './@core/application/Auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmConfigModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
