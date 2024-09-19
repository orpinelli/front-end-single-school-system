import { Student } from "./Student";

export class Class {
  public students: Student[] = [];
  constructor(
    public id: number,
    public name: string,
    public series: string,
    students: Student[] = []
  ) {
    this.students = students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }
}
