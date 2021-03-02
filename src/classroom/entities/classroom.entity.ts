import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    code:string

    @Column()
    capacity:number
}
