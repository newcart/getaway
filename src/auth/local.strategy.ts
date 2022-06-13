import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, Request, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({passReqToCallback: true});
    }

    async validate(@Request() req): Promise<any> {
        if(typeof req.headers["authorization"] == 'undefined'){
            throw new UnauthorizedException();
        }
        const base64 = req.headers["authorization"].toString();
        const base64Credentials =  base64.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        var [api_key, secret_key] = credentials.split(':');
        api_key = api_key.trim();
        secret_key = secret_key.trim();
        const user = await this.authService.validateUser(api_key, secret_key);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
