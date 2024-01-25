import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';


@Injectable()
export class SubjectsService {

  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const newSubject = this.subjectRepository.create(createSubjectDto);
    return this.subjectRepository.save(newSubject);
  }
  
  async findAll(): Promise<Subject[]> {
     return this.subjectRepository.find();
  }
 
  async findOne(id: number): Promise<Subject | undefined>{
    return this.subjectRepository.findOneOrFail({where:{id}});
  }

 
  async update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject | undefined> {
    await this.subjectRepository.update(id, updateSubjectDto);
    return this.subjectRepository.findOneOrFail({where: {id}});
  }

  async remove(id: number) {
    return `Subject with #${id} successfully Removed`;
  }
}
