import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) { }
    create(createStudentDto: CreateStudentDto) {
        const createStudent = this.studentRepository.create(createStudentDto);
        return this.studentRepository.save(createStudent);//save salva entità nel DB
    }

    findAll() {
        return this.studentRepository.find();
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
        return await this.studentRepository.findOne(id,{
            where: [{ id: id }]
        });
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`;
    }

    async remove(id: number) {
        return this.studentRepository.delete(id);
    }
}
