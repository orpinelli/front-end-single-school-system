"use client";

import { useEffect, useState } from "react";
import { Student } from "@/lib/Student";
import { ISchool } from "@/interfaces/ISchool";
import { IClass } from "@/interfaces/IClass";

export function useStudentContainer(classId: number) {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!classId) return;

    const fetchStudents = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar alunos");
        }

        const data: { schools: ISchool[] } = await response.json();

        const classData: IClass | undefined = data.schools
          .flatMap((school) => school.classes)
          .find((classItem) => classItem.id === classId);

        if (classData) {
          const loadedStudents = classData.students.map(
            (studentData) =>
              new Student(
                studentData.id,
                studentData.name,
                studentData.registration
              )
          );
          setStudents(loadedStudents);
        }
      } catch (err) {
        setError("Erro ao carregar alunos");
        console.error(err);
      }
    };

    fetchStudents();
  }, [classId]);

  return { students, error };
}
