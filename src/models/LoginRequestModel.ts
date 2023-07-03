import { AbstractEntity } from "./AbstractEntity"

export class LoginRequest extends AbstractEntity{
    username! : string
    senha! : string
}