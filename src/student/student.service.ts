import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
    
    constructor(
            @InjectRepository(Student)
            private studentRepository: Repository<Student>,
    ){}
    
    //Creating Students 
    async create(createStudentDto: CreateStudentDto){
        const newStudent = this.studentRepository.create(createStudentDto);
        return await this.studentRepository.save(newStudent);
    }

    async findAll(){
        return await this.studentRepository.find();

    }

    async findOne(id: number) {
        return await this.studentRepository.findOne({where: {id} });
    }

    async update(id: number, updateStudentDto: UpdateStudentDto){
        const student = await this.studentRepository.findOne({where: {id} });
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        Object.assign(student, updateStudentDto); 

        return await this.studentRepository.update(id, updateStudentDto);
    }

    async remove(id: number) {
        const student = await this.studentRepository.findOne({where: {id} });
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        return await this.studentRepository.remove(student);

    }

}

  

