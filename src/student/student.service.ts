import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const createStudent = this.studentRepository.create(createStudentDto);
    const savedStudent = await this.studentRepository.save(createStudent); //save salva entità nel DB
    return await this.findOne(savedStudent.id);
  }

  async findAll() {
    return await this.studentRepository.find({
      relations: ['courses'],
    });
  }

  async findOne(id: number) {
    if (!(await this.studentRepository.findOne(id))) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `student not found for provided id:${id}`,
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return await this.studentRepository.find({
      relations: ['courses'],
      where: { id: id },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    if (!(await this.studentRepository.findOne(id))) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `no student found for provided id:${id}`,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    await this.studentRepository.update(id, updateStudentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
