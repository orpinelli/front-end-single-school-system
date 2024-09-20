"use client";

import { useEffect, useState } from "react";
import { School } from "@/lib/School";
import { Class } from "@/lib/Class";

interface SchoolWithCounts extends School {
  numberOfClasses: number;
  numberOfStudents: number;
}

export function useSchoolContainer() {
  const [schools, setSchools] = useState<SchoolWithCounts[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("mock/db.json");
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
                new Class(
                  classData.id,
                  classData.name,
                  classData.series,
                  classData.students
                )
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

  return { schools, error };
}
