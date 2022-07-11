import { Injectable, Request,  Response, NestMiddleware, UnauthorizedException, HttpException, HttpStatus   } from "@nestjs/common";
import { NextFunction} from "express";
import { AuthService } from "./auth.basic.service";
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class authMiddleware implements NestMiddleware {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(UserEntity)
        private dbRepository: Repository<UserEntity>,
    ) {}

    async use(request: Request, res: Response, next: NextFunction) {

        request["data"] = [];
        const b64auth = (request.headers['authorization'] || '').split(' ')[1] || ''
        const [api_key, secret_key] = Buffer.from(b64auth, 'base64').toString().split(':')
        const user = await this.validateUser(api_key, secret_key);
        if(user){
            request["data"] = {
                'body' : JSON.parse( JSON.stringify( request.body) ),
                'auth' : user
            };
            return next();
        }
        throw new UnauthorizedException()
    }

    private async validateUser(api_key, secret_key){
        if(process.env.SV_NAME==api_key && process.env.SV_PASS==secret_key){
            return {
                name        : 'Supervisor',
                isSupervisor: 1
            }
        }
        const validUser = await this.dbRepository.findOne({where: {api_key:api_key, secret_key:secret_key}})
        return validUser
    }
}
