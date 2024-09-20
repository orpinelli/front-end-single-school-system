import { Entity } from "./IEntity";

export class Student extends Entity {
  constructor(id: number, name: string, public registration: string) {
    super(id, name);
  }

  getDescription(): string {
    return `Aluno ${this.name}, matrícula ${this.registration}`;
  }
}
