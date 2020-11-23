import { Character } from './../character/character.entity';
import { Game } from './../game/game.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"

@Entity()
export class Player {

    constructor(player: Omit<Player, 'id' | 'createdAt' | 'updatedAt' | 'character'>){
        Object.assign(this, player)
    }

    @PrimaryColumn("uuid")
    id: number

    @Column()
    name: string

    @OneToOne(() => Game)
    @JoinColumn()
    game: Game


    @OneToOne(() => Character)
    @JoinColumn()
    character: Character
}