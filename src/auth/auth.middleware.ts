import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import {AuthService} from "./auth.basic.service";

@Injectable()
export class authMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}
    use(request: Request, res: Response, next: NextFunction) {
        const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
        const [api_key, secret_key] = Buffer.from(b64auth, 'base64').toString().split(':')
        const user = this.validateUser(api_key, secret_key);
        if(user){
            return next()
        }
        throw new UnauthorizedException()
    }
    private validateUser(api_key, secret_key){
        return this.authService.validateUser(api_key, secret_key);
    }
}
