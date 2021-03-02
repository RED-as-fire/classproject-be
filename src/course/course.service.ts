import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private courseRepository:Repository<Course>  
    ){}
  create(createCourseDto: CreateCourseDto) {
    const createCourse=this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(createCourse);//save salva entità nel DB
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOne(id);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
