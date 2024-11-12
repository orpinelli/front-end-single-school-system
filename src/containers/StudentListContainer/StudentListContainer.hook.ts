"use client";

import { useEffect, useState } from "react";
import { SchoolService } from "@/services/SchoolService"; 
import { Student } from "@/lib/Student";  

export function useStudentContainer(classId: number) {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!classId) return;

    const fetchStudents = async () => {
      try {
        const schools = await SchoolService.fetchSchools(); 
        const classData = schools
          .flatMap((school) => school.getClasses())
          .find((classItem) => classItem.getId() === classId);

        if (classData) {
          setStudents(classData.getStudents()); 
        } else {
          setError("Turma não encontrada.");
        }
      } catch (err) {
        setError("Erro ao carregar alunos.");
        console.error(err);
      }
    };

    fetchStudents();
  }, [classId]);

  return { students, error };
}
