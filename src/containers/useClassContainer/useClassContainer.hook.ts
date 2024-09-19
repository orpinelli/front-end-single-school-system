"use client";

import { useEffect, useState } from "react";
import { Class } from "@/lib/Class";

export function useClassContainer(schoolId: number) {
  const [classes, setClasses] = useState<Class[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) return;

    const fetchClasses = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar turmas");
        }
        const data = await response.json();
        const schoolData = data.schools.find(
          (school: { id: number }) => school.id === schoolId
        );
        if (schoolData) {
          const loadedClasses = schoolData.classes.map(
            (classData: any) =>
              new Class(
                classData.id,
                classData.name,
                classData.series,
                classData.students
              )
          );
          setClasses(loadedClasses);
        }
      } catch (err) {
        setError("Erro ao carregar turmas");
        console.error(err);
      }
    };

    fetchClasses();
  }, [schoolId]);

  return { classes, error };
}
