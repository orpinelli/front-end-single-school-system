import { Class } from "./Class";
import { Entity } from "./Entity";
import { Student } from "./Student";

export class School extends Entity {
  private address: string;
  private classes: Class[] = [];

  constructor(id: number, name: string, address: string, classes: Class[] = []) {
    super(id, name);
    this.address = address;
    this.classes = classes;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(newAddress: string): void {
    this.address = newAddress;
  }

  getDescription(): string {
    return `Escola ${this.getName()}, localizada em ${this.getAddress()}`;
  }

  addStudentToClass(classId: number, student: Student): boolean {
    const schoolClass = this.classes.find(cls => cls.getId() === classId);
    if (schoolClass) {
      schoolClass.addStudent(student);
      return true;
    }
    return false;
  }

  getNumberOfClasses(): number {
    return this.classes.length;
  }

  getNumberOfStudents(): number {
    return this.classes.reduce((total, cls) => total + cls.getStudents().length, 0);
  }


  getClasses(): Class[] {
    return this.classes;
  }
}
