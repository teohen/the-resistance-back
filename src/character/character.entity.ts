import { Game } from './../game/game.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character{
    @PrimaryGeneratedColumn("uuid")
    id: number

    
    @ManyToOne(type => Game, game => game.characters)
    game: Game

    @Column({default: true})
    ativo: boolean

    @Column({default: new Date().toString()})
    createdAt: Date

    @Column({nullable: true})
    updatedAt: Date 
}