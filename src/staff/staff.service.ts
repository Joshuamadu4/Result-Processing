import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ){}


  //Creating Staff and Passwords 
  async create(createStaffDto: CreateStaffDto) {
      const existingStaff = await this.staffRepository.findOne({ where: { staffId: createStaffDto.staffId } });
      if (existingStaff) {
        throw new Error('Staff ID already exists.'); // Handle the uniqueness of Staff Identification
      }
    
      const { password, ...rest } = createStaffDto;
      const saltRounds = 10;

  // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new staff member with the hashed password
    const newStaff = this.staffRepository.create({
      ...rest,
      password: hashedPassword, // Save the hashed password
    });
    return await this.staffRepository.save(newStaff);
  }


  async findAll(): Promise<Staff[]>{
    return  this.staffRepository.find();
  }

  async findOne(id: number) {
    const staff = await this.staffRepository.findOne({where:{id}});
    if (!staff) {
      throw new NotFoundException(`Staff with ID ${id} not found`);
    }
    Object.assign(staff);
    return await this.staffRepository.findOneOrFail({where:{id}});
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    const staff = await this.staffRepository.findOne({where:{id}}); 
    if (!staff) {
      throw new NotFoundException(`Staff with ID ${id} not Found`);
    }
    Object.assign(staff, updateStaffDto);
    return await this.staffRepository.update(id, updateStaffDto);
  }

  async remove(id: number) {
    const staff = await this.staffRepository.findOne({where:{id}});
    if(!staff){
      throw new NotFoundException(`Staff with ID ${id} not found`);
    }
    return await this.staffRepository.delete(id);
  }
}
