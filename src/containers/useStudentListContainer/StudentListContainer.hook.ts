"use client";

import { useEffect, useState } from "react";
import { Student } from "@/lib/Student";

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
        const data = await response.json();
        const classData = data.schools
          .flatMap((school: any) => school.classes)
          .find((classItem: any) => classItem.id === classId);

        if (classData) {
          const loadedStudents = classData.students.map(
            (studentData: any) =>
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
