import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private studentRepository:Repository<Student>        
    ){}
  create(createStudentDto: CreateStudentDto) {
      const createStudent=this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(createStudent);//save salva entità nel DB
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOne(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
