import { Entity } from "./Entity";
import { Student } from "./Student";

export class Class extends Entity {
  private series: string; 
  private students: Student[]; 

  constructor(id: number, name: string, series: string, students: Student[] = []) {
    super(id, name);
    this.series = series;
    this.students = students;
  }

  getSeries(): string {
    return this.series;
  }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getDescription(): string {
    return `Classe ${this.getName()} - Série ${this.series}`;
  }
}
