import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from './student.entity';


@Entity()
export class studentSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, student => student.subjects)
  student: Student;

  @Column()
  studentId: string; 

  @Column()
  subjectId: string; 

  @Column()
  termId: string; // ID of the term/semester

  @Column()
  firstCAScore: number; 

  @Column()
  secondCAScore: number; 

  @Column()
  thirdCAScore: number; 

  @Column()
  fourthCAScore: number; 

  @Column()
  examScore: number; 
}
