import { Character } from './../character/character.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role{
    @PrimaryGeneratedColumn("uuid")
    id: number

    
    @OneToOne(() => Character)
    @JoinColumn()
    Character: Character

    @Column()
    title: string

    @Column({default: true})
    active: boolean

    @Column({default: new Date().toString()})
    createdAt: Date

    @Column({nullable: true})
    updatedAt: Date 
}