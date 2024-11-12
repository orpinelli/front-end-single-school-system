export interface ApiSchoolData {
    id: number;
    name: string;
    address: string;
    classes: ApiClassData[];
  }
  
  export interface ApiClassData {
    id: number;
    name: string;
    series: string;
    students: ApiStudentData[];
  }
  
  export interface ApiStudentData {
    id: number;
    name: string;
    registration: string;
  }