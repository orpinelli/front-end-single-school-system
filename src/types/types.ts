export interface Student {
  id: number;
  name: string;
  registration: string;
}

export interface Class {
  id: number;
  name: string;
  series: string;
  students: Student[];
}

export interface School {
  id: number;
  name: string;
  address: string;
  classes: Class[];
}
