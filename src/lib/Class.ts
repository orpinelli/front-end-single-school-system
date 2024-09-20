import { IStudent } from "@/interfaces/IStudent";

export class Class {
  constructor(
    public id: number,
    public name: string,
    public series: string,
    public students: IStudent[] = []
  ) {}

  getStudents(): IStudent[] {
    return this.students;
  }

  getDescription(): string {
    return `${this.name} - ${this.series}`;
  }

  addStudent(student: IStudent): void {
    this.students.push(student);
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
}
