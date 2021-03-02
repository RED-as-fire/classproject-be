import { Classroom } from "src/classroom/entities/classroom.entity";
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    code:string

    @Column()
    name:string

    @OneToMany(()=>Classroom,(classroom:Classroom)=>classroom.course)
    classrooms:Classroom[];

    @ManyToMany(() => Student,student=>student.courses)
    students: Student[]
}

