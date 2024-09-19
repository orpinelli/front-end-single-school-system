"use client";

import { useEffect, useState } from "react";
import { School } from "@/types/types";

export default function SchoolList() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    fetch("mock/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo JSON");
        }
        return response.json();
      })
      .then((data) => setSchools(data.schools))
      .catch((error) => console.error(error));
  }, []);
  console.log(schools);
  return (
    <div>
      <h1>Escolas:</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            <a href={`/turmas/${school.id}`}>{school.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
