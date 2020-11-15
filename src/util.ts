import { generate } from "rxjs"

export const util = {
    generateCode(): string  {
        return Math.random().toString(16).substr(2, 8).toUpperCase();
    }
}