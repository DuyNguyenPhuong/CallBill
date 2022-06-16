import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallModule } from './call/call.module';
import { Call } from './entity/call.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
  CallModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
