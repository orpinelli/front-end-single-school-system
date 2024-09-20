import { Entity } from "./IEntity";

export class Class extends Entity {
  constructor(
    id: number,
    name: string,
    public series: string,
    public students: any[] = []
  ) {
    super(id, name);
  }

  getDescription(): string {
    return `Turma ${this.name} da série ${this.series}`;
  }

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents(): any[] {
    return this.students;
  }
}
