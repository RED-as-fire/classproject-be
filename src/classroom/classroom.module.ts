import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { Course } from 'src/course/entities/course.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  controllers: [ClassroomController],
  providers: [ClassroomService],
  imports: [TypeOrmModule.forFeature([Classroom,Course,Student])]
})
export class ClassroomModule {}
