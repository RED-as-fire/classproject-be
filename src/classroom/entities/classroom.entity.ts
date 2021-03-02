import { Course } from "src/course/entities/course.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
}

