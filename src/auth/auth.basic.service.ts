import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateUser(api_key: string, secret_key: string) {
        const user = this.getUser(api_key)
        if(user && user.secret_key == secret_key){
            return  user;
        }
        return false;
    }
    private getUser(api_key){
        const users = [
            {
                userId: 1,
                api_key: 'supervisor',
                secret_key: 'yMRk5sS164V9i94S',
            },
            {
                userId: 2,
                api_key: 'akilliphone',
                secret_key: 'scFmaPnu3pvg!',
            }
        ];
        return users.find(user => user.api_key === api_key);
    }
}
