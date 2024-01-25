import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Password_resets')
export class PasswordEntity{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    email: string;

    @Column({unique: true})
    token: string;
    
}