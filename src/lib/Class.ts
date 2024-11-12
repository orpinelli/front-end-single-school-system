
import { Student } from "@/lib/Student"; 

export class Class {
  private id: number;
  private name: string;
  private series: string;
  private students: Student[];

  constructor(id: number, name: string, series: string, students: Student[]) {
    this.id = id;
    this.name = name;
    this.series = series;
    this.students = students;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
}
