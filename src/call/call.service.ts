import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Call } from 'src/entity/call.entity';
import { results } from 'src/result/result';

import { Like, Not, Repository } from "typeorm";

@Injectable()
export class CallService {
    constructor(
        @InjectRepository(Call)
        private readonly callRepository: Repository<Call>,
    ) {}

    public async insertCall(user_name: string, time: number){
        if (user_name.length> 32){
            throw new HttpException({key: 'TOO_LONG_TITLE'}, HttpStatus.BAD_REQUEST);
        }
        const newCall = new Call();
        newCall.user_call = user_name;
        newCall.time_call = time;
        const result = await this.callRepository.save(newCall);
        if (result) return result;
        throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    

    public async insertBill(user_name: string){
        const result = await this.callRepository.createQueryBuilder("call")
        .where("call.user_call = :username", { username: user_name })
        .getMany();
  
        var sum_time = 0;
        const call_count = result.length;

        for (var index in result) {
           sum_time = Number(sum_time) + Number(result[index].time_call); 
        }
    
        const block_count = Math.ceil((sum_time/1000)/30);
        const newResult = new results;
        newResult.call_count = call_count;
        newResult.call_block = block_count;
        return newResult;

    }

}

