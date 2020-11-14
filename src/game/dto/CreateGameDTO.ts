import { ClassSerializerInterceptor } from "@nestjs/common";

export class CreateGameDTO {
    code: string
    nPlayers: number
}