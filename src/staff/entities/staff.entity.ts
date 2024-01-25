import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    staffId: string;

    @Column()
    password: string;

    @Column()
    name: string; 
    
    @Column()
    gender: string;

    @Column()
    DateOfBirth: Date;

    @Column()
    Qualifications: string;


    @Column()
    PhoneNumber: string;

    @Column()
    email: string;

}
