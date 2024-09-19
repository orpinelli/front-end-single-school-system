"use client";

import { Class, Student } from "@/types/types";
import { useEffect, useState } from "react";

interface Props {
  params: {
    schoolId: string;
    classId: string;
  };
}

export default function ClassDetailPage({ params }: Props) {
  const { schoolId, classId } = params;
  const [classItem, setClassItem] = useState<Class | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo JSON");
        }
        const data = await response.json();
        const school = data.schools.find(
          (school: { id: number }) => school.id === Number(schoolId)
        );
        const selectedClass = school?.classes.find(
          (classItem: Class) => classItem.id === Number(classId)
        );
        if (selectedClass) {
          setClassItem(selectedClass);
        } else {
          throw new Error("Turma não encontrada");
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchClass(); // Carrega a turma com base no ID
  }, [schoolId, classId]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!classItem) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>
        Alunos da {classItem.name} - {classItem.series}
      </h1>
      {classItem.students.length > 0 ? (
        <ul>
          {classItem.students.map((student: Student) => (
            <li key={student.id}>
              {student.name} - Matrícula: {student.registration}
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há alunos cadastrados para esta turma.</p>
      )}
    </div>
  );
}
