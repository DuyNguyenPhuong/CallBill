import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { time } from 'console';
import { CallService } from './call.service';


@Controller('mobile')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Put(':user_call/call')
  addTask(@Param('user_call') user_name: string, @Body('call_duration') time: number){
      this.callService.insertCall(user_name, time);
  }
    
  @Get(':user_call/billing')
  addBill(@Param('user_call') user_name: string){
      return this.callService.insertBill(user_name);
  }

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
}
