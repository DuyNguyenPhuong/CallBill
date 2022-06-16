import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Call } from "./entity/call.entity";


export const typeOrmConfig : TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "call",
    "entities": [Call],
    // "synchronize": true
}