import { Character } from './../character/character.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {


    constructor(game: Omit<Game, 'id' | 'createdAt' | 'updatedAt' | 'characters'>){
        Object.assign(this, game)
    }


    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    code: string

    @Column()
    nPlayers: number

    @Column({default: new Date().toString()})
    createdAt: Date

    @Column({nullable: true})
    updatedAt: Date 

    @OneToMany(type => Character, character => character.id)
    characters: Character[]

}