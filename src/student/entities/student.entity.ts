import { Classroom } from "src/classroom/entities/classroom.entity";
import { Course } from "src/course/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string
    @Column()
    surname:string

    @ManyToMany(()=>Classroom)
    @JoinTable()
    classrooms:Classroom[]

    @ManyToMany(()=>Course)
    @JoinTable()
    courses:Course[]
}
