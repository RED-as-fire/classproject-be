import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
    constructor(
        @InjectRepository(Classroom)
        private classRepository: Repository<Classroom>,
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,

    ) { }
    async create(createClassroomDto: CreateClassroomDto, id: number) {
        const course = await this.courseRepository.findOne({ id });
        const createClassroom =await this.classRepository.create({
            ...createClassroomDto,
            course: course
        });
        await this.classRepository.save(createClassroom);//save salva entità nel DB
        return createClassroom;
    }

    findAll() {
        return this.classRepository.find({ relations: ['course'] });
    }

    findOne(id: number) {
        return this.classRepository.findOne(id, { relations: ['course'] });
    }

    update(id: number, updateClassroomDto: UpdateClassroomDto) {
        return `This action updates a #${id} classroom`;
    }

    remove(id: number) {
        return `This action removes a #${id} classroom`;
    }
}
