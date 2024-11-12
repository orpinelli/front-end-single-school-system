
import { School } from "@/lib/School";
import { Class } from "@/lib/Class";
import { Student } from "@/lib/Student";


interface ApiStudentData {
  id: number;
  name: string;
  registration: string;
}

interface ApiClassData {
  id: number;
  name: string;
  series: string;
  students: ApiStudentData[];
}

interface ApiSchoolData {
  id: number;
  name: string;
  address: string;
  classes: ApiClassData[];
}

export class SchoolService {
  static async fetchSchools(): Promise<School[]> {
    try {
      const response = await fetch("/mock/db.json"); 
      if (!response.ok) {
        throw new Error("Erro ao carregar escolas");
      }

      const data = await response.json(); 
      return data.schools.map((schoolData: ApiSchoolData) => {
        const classes = schoolData.classes.map((classData: ApiClassData) => 
          new Class(
            classData.id,
            classData.name,
            classData.series,
            classData.students.map((studentData: ApiStudentData) => 
              new Student(
                studentData.id,
                studentData.name,
                studentData.registration
              )
            )
          )
        );
        return new School(
          schoolData.id,
          schoolData.name,
          schoolData.address,
          classes
        );
      });
    } catch (err) {
      console.error("Erro ao carregar as escolas:", err);
      throw err; 
    }
  }


  static async addSchool(newSchool: { name: string; address: string }): Promise<School> {
    try {
      const response = await fetch("/api/schools", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSchool),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar escola");
      }

      const data = await response.json();

 
      return new School(data.id, data.name, data.address, []);
    } catch (err) {
      console.error("Erro ao adicionar a escola:", err);
      throw err; 
  }
}
}