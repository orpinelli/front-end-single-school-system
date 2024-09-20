import { IEntity } from "./Entity";
import { IClass } from "./IClass";

export interface ISchool extends IEntity {
  address: string;
  classes: IClass[];
  addClass(classItem: IClass): void;
}
