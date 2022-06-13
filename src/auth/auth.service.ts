import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
    async validateUser(api_key: string, secret_key: string): Promise<any> {

        return await this.usersService.findOne(api_key, secret_key);
    }
}
