import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity'; 
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { username } });
    return user || undefined; // Ensure `undefined` is returned if `user` is null
  }

  async createUser(userData: Partial<UserEntity>): Promise<UserEntity> {

    const { username, email } = userData;

    // Check if user with the provided username or email already exists
    const existingUser = await this.userRepository.findOne({ where: [{ username }, { email }] });

    if (existingUser) {
      throw new Error('Username or Email already exists');
    }

    // If no user exists, proceed with creating the new user
    const { password, ...rest } = userData;

    if (!password) {
      // Handle the case where password is missing or undefined
      throw new Error('Password is required');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcryptjs

    const newUser = this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }
}
