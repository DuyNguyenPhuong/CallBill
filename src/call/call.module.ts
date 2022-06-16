import { Module } from '@nestjs/common';
import { Call } from 'src/entity/call.entity';
import { CallController } from './call.controller';
import { CallService } from './call.service';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [ TypeOrmModule.forFeature([Call])],
  controllers: [CallController],
  providers: [CallService],
})
export class CallModule {}
