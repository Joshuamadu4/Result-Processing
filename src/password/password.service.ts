import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordEntity } from './entities/password.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PasswordService {
    constructor(
        @InjectRepository(PasswordEntity) private readonly passwordRepository: Repository<PasswordEntity>,
    ) {}

    async createPassword(body: any){
        return this.passwordRepository.save(body);
    }
}
