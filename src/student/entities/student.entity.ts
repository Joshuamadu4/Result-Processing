import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { studentSubject } from './studentSubject.entity';


@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  otherNames: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  lgaOfOrigin: string;

  @Column()
  stateOfOrigin: string;

  
  @Column()
  parentsNumber: string;

  @Column()
  parentsAddress: string;

  @Column()
  DateofBirth: Date;

 

  @Column()
  studentClass: string;

  

  @Column({ nullable: true }) // Nullable as the file might not exist initially
  medicalReportFilename: string; // Store the filename of the medical report

  @Column({ nullable: true })
  birthCertificateFilename: string; // Store the filename of the birth certificate

  @Column({ nullable: true })
  pictureFilename: string; // Store the filename of the student's picture



  @OneToMany(() => studentSubject, subject => subject.student)
  subjects: studentSubject[];
}
