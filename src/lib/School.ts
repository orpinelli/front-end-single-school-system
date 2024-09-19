import { Class } from "./Class";

export class School {
  public classes: Class[] = [];

  constructor(
    public id: number,
    public name: string,
    public address: string,
    classes: Class[] = []
  ) {
    this.classes = classes;
  }

  addClass(classItem: Class) {
    this.classes.push(classItem);
  }

  getClasses(): Class[] {
    return this.classes;
  }
}
