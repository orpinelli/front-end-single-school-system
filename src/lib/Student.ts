import { Entity } from "./Entity";

export class Student extends Entity {
  constructor(id: number, name: string, public registration: string) {
    super(id, name);
  }

  getDescription(): string {
    return `Aluno ${this.getName()}, matrícula ${this.registration}`;
  }
}