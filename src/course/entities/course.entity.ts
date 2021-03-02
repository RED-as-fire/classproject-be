import { Classroom } from "src/classroom/entities/classroom.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
}

