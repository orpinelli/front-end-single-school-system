import { Entity } from "./IEntity";
interface Student {
  id: number;
  name: string;
  registration: string;
}

interface Class {
  id: number;
  name: string;
  series: string;
  students: Student[];
}

export class School extends Entity {
  constructor(
    id: number,
    name: string,
    public address: string,
    public classes: Class[] = []
  ) {
    super(id, name);
  }

  getDescription(): string {
    return `Escola ${this.name} localizada em ${this.address}`;
  }

  addClass(classItem: Class) {
    this.classes.push(classItem);
  }

  getClasses(): Class[] {
    return this.classes;
  }

  getNumberOfClasses(): number {
    return this.classes.length;
  }

  getNumberOfStudents(): number {
    return this.classes.reduce((total, classItem) => {
      return total + classItem.students.length;
    }, 0);
  }
}
