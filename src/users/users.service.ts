import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            api_key: 'akilliphone',
            secret_key: 'scFmaPnu3pvg!',
        }
    ];

    async findOne(api_key: string, secret_key: string): Promise<User | undefined> {

        const user = this.users.find(user => user.api_key === api_key);
        if(user && user.secret_key == secret_key){
            return  user;
        }
        return false;
    }
}
