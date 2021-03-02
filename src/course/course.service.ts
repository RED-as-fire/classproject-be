import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    const { studentIDs } = createCourseDto;
    const createCourse = this.courseRepository.create({
      ...createCourseDto,
    });
    createCourse.students = [];

    for (const studentId of studentIDs) {
      const student = await this.studentRepository.findOne(studentId);
      createCourse.students.push(student);
    }
    await this.courseRepository.save(createCourse);
    return createCourse;
  }

  findAll() {
    return this.courseRepository.find({
      relations: ['students'],
    });
  }

  findOne(id: number) {
    return this.courseRepository.findOne({
      relations: ['students'],
      where: {
        id,
      },
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
