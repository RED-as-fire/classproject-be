import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    code:string

    @Column()
    name:string
}

