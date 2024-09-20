import { Entity } from "./IEntity";

interface Student {
  id: number;
  name: string;
  registration: string;
}

export class Class extends Entity {
  public students: Student[];

  constructor(
    id: number,
    name: string,
    public series: string,
    students: Student[] = []
  ) {
    super(id, name);
    this.students = students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getDescription(): string {
    return `Turma ${this.name} da série ${this.series}`;
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
}
