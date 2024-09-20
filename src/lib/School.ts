import { Entity } from "./IEntity";

export class School extends Entity {
  constructor(
    id: number,
    name: string,
    public address: string,
    public classes: any[] = []
  ) {
    super(id, name);
  }

  getDescription(): string {
    return `Escola ${this.name} localizada em ${this.address}`;
  }

  addClass(classItem: any) {
    this.classes.push(classItem);
  }

  getClasses(): any[] {
    return this.classes;
  }
}
