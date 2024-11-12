"use client";

import { useEffect, useState } from "react";
import { Class } from "@/lib/Class";
import { Student } from "@/lib/Student";
import { ApiSchoolData, ApiClassData, ApiStudentData } from "@/types/ApiTypes";

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
        
        const data: { schools: ApiSchoolData[] } = await response.json();
        
        const schoolData = data.schools.find(
          (school) => school.id === schoolId
        );

        if (schoolData) {
          const loadedClasses: Class[] = schoolData.classes.map((classData: ApiClassData) => {
            const students = classData.students.map(
              (studentData: ApiStudentData) =>
                new Student(studentData.id, studentData.name, studentData.registration)
            );
            return new Class(classData.id, classData.name, classData.series, students);
          });

          setClasses(loadedClasses);
        }
      } catch (err) {
        setError("Erro ao carregar turmas");
        console.error(err);
      }
    };

    fetchClasses();
  }, [schoolId]);

  const addClass = (newClass: { name: string; series: string }) => {
    const newClassItem = new Class(
      classes.length + 1,
      newClass.name,
      newClass.series,
      []
    );

    setClasses((prevClasses) => [...prevClasses, newClassItem]);
  };

  return { classes, error, addClass };
}