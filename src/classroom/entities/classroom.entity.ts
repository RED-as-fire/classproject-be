import { Course } from "src/course/entities/course.entity";
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    code:string

    @Column()
    capacity:number

    @ManyToOne(()=>Course,(course:Course)=>course.classrooms,{
        onDelete:'CASCADE',
    })
    course:Course

    @ManyToMany(() => Student,student=>student.classrooms,{
        cascade:true
    })
    students: Student[]
}

