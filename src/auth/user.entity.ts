import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column({nullable:true})
    store: number;
    @Column({ unique: true })
    email: string;
    @Column({nullable:true})
    api_key: string;
    @Column({nullable:true})
    secret_key: string;
}
