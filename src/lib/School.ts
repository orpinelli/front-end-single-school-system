import { ISchool } from "@/interfaces/ISchool";
import { IClass } from "@/interfaces/IClass";
import { Entity } from "./IEntity";

export class School extends Entity implements ISchool {
  getDescription(): string {
    throw new Error("Method not implemented.");
  }
  address: string;
  classes: IClass[] = [];

  constructor(
    id: number,
    name: string,
    address: string,
    classes: IClass[] = []
  ) {
    super(id, name);
    this.address = address;
    this.classes = classes;
  }

  addClass(classItem: IClass): void {
    this.classes.push(classItem);
  }

  getClasses(): IClass[] {
    return this.classes;
  }

  getNumberOfClasses(): number {
    return this.classes.length;
  }

  getNumberOfStudents(): number {
    return this.classes.reduce(
      (total, classItem) => total + classItem.students.length,
      0
    );
  }
}
