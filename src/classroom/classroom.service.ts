import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
    constructor(
        @InjectRepository(Classroom)
        private classRepository:Repository<Classroom>  
    ){}
  create(createClassroomDto: CreateClassroomDto) {
    const createClassroom=this.classRepository.create(createClassroomDto);
    return this.classRepository.save(createClassroom);//save salva entità nel DB
  }

  findAll() {
    return this.classRepository.find();
  }

  findOne(id: number) {
    return this.classRepository.findOne(id);
  }

  update(id: number, updateClassroomDto: UpdateClassroomDto) {
    return `This action updates a #${id} classroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
