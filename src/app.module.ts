import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './student/entities/student.entity';
import { StudentModule } from './student/student.module';
import { ClassroomModule } from './classroom/classroom.module';
import { Classroom } from './classroom/entities/classroom.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';


@Module({
    imports: [StudentModule,
        ConfigModule.forRoot({

            isGlobal: true,

        }),

        TypeOrmModule.forRoot({

            type: 'mysql',

            host: 'localhost',

            port: 3306,

            username: process.env.DB_user,

            password: process.env.DB_password,

            database: 'architetturasoftware',

            entities: [Student,Classroom,Course],

            synchronize: true,

            keepConnectionAlive: true,

        }),

        ClassroomModule,

        CourseModule,],

    controllers: [AppController],
    providers: [AppService],

})
export class AppModule { }
