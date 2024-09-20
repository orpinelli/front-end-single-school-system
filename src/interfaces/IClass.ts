import { IEntity } from "./Entity";
import { IStudent } from "./IStudent";

export interface IClass extends IEntity {
  series: string;
  students: IStudent[];
  addStudent(student: IStudent): void;
}
