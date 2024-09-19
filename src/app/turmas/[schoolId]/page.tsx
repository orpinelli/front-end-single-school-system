"use client";
import { School, Class } from "@/types/types";
import { useEffect, useState } from "react";

interface Props {
  params: {
    schoolId: string;
  };
}

export default function SchoolClassesPage({ params }: Props) {
  const { schoolId } = params; // Pegamos o schoolId diretamente dos props
  const [school, setSchool] = useState<School | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo JSON");
        }
        const data = await response.json();
        const selectedSchool = data.schools.find(
          (school: School) => school.id === Number(schoolId)
        );
        if (selectedSchool) {
          setSchool(selectedSchool);
        } else {
          throw new Error("Escola não encontrada");
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchSchool(); // Carrega a escola com base no ID
  }, [schoolId]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!school) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Turmas da {school.name}</h1>
      {school.classes.length > 0 ? (
        <ul>
          {school.classes.map((classItem: Class) => (
            <li key={classItem.id}>
              <a href={`/turmas/${school.id}/classes/${classItem.id}`}>
                {classItem.name} - {classItem.series}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há turmas cadastradas para esta escola.</p>
      )}
    </div>
  );
}
