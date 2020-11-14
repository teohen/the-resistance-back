import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    role: string

    @Column()
    description: string

    @Column({default: true})
    ativo: boolean

    @Column({default: new Date().toString()})
    createdAt: Date

    @Column({nullable: true})
    updatedAt: Date 
}