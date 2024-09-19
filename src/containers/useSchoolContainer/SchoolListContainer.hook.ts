"use client";

import { useEffect, useState } from "react";
import { School } from "@/lib/School";
import { Class } from "@/lib/Class";

export function useSchoolContainer() {
  const [schools, setSchools] = useState<School[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar escolas");
        }
        const data = await response.json();

        const loadedSchools = data.schools.map(
          (schoolData: any) =>
            new School(
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
            )
        );
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