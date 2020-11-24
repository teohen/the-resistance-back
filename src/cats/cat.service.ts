import { Cat } from './cat.model'
import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
    private readonly cats: Cat[]

    //creates a cat
    create(cat: Cat){
        this.cats.push(cat)
    }

    findAll(): Cat[]{
        return this.cats
    }
}