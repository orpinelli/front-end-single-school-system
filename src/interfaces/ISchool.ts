import { School } from "@/lib/School";
import { IEntity } from "./Entity";
import { IClass } from "./IClass";

export interface ISchool extends IEntity {
  address: string;
  classes: IClass[];
  addClass(classItem: IClass): void;
}

export interface SchoolWithCounts extends ISchool {
  numberOfClasses: number;
  numberOfStudents: number;
}
