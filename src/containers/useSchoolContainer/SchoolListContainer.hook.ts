"use client";

import { useEffect, useState } from "react";
import { School } from "@/lib/School";
import { SchoolWithCounts } from "@/interfaces/ISchool";
import { IClass } from "@/interfaces/IClass";

export function useSchoolContainer() {
  const [schools, setSchools] = useState<SchoolWithCounts[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar escolas");
        }
        const data = await response.json();

        const loadedSchools = data.schools.map((schoolData: any) => {
          const school = new School(
            schoolData.id,
            schoolData.name,
            schoolData.address,
            schoolData.classes.map(
              (classData: any) =>
                ({
                  id: classData.id,
                  name: classData.name,
                  series: classData.series,
                  students: classData.students,
                } as IClass)
            )
          );

          return {
            ...school,
            numberOfClasses: school.getNumberOfClasses(),
            numberOfStudents: school.getNumberOfStudents(),
          };
        });

        setSchools(loadedSchools);
      } catch (err) {
        setError("Erro ao carregar escolas");
        console.error(err);
      }
    };

    fetchSchools();
  }, []);

  const addSchool = (newSchool: { name: string; address: string }) => {
    const school = new School(
      schools.length + 1,
      newSchool.name,
      newSchool.address,
      []
    );

    const newSchoolWithCounts: SchoolWithCounts = {
      ...school,
      numberOfClasses: 0,
      numberOfStudents: 0,
      addClass: function (classItem: IClass): void {
        throw new Error("Function not implemented.");
      },
    };

    setSchools([...schools, newSchoolWithCounts]);
  };

  return { schools, error, addSchool };
}
