"use client";

import { useEffect, useState } from "react";
import { School } from "@/lib/School";
import { Class } from "@/lib/Class";
import { Student } from "@/lib/Student"; 
import { ApiSchoolData } from "@/types/ApiTypes"; 

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export function useSchoolContainer() {
  const [schools, setSchools] = useState<School[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("/mock/db.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar escolas");
        }
        const data: { schools: ApiSchoolData[] } = await response.json();

        const loadedSchools = data.schools.map((schoolData) => {
          const classes = schoolData.classes.map(
            (classData) =>
              new Class(
                classData.id,
                classData.name,
                classData.series,
                classData.students.map(
                  (studentData) => new Student(studentData.id, studentData.name, studentData.registration)
                )
              )
          );
          return new School(schoolData.id, schoolData.name, schoolData.address, classes);
        });

        setSchools(loadedSchools);
      } catch (err) {
        setError("Erro ao carregar escolas");
        console.error(err);
      }
    };

    fetchSchools();
  }, []);

  const addSchool = (newSchool: { name: string; address: string }) => {
    const nextId = schools.length ? schools[schools.length - 1].getId() + 1 : 1;
    const school = new School(nextId, newSchool.name, newSchool.address, []);

    setSchools([...schools, school]);
  };

  const editSchool = (updatedSchool: { id: number; name: string; address: string }) => {
    const updatedSchools = schools.map((school) => {
      if (school.getId() === updatedSchool.id) {
        school.setName(updatedSchool.name);
        school.setAddress(updatedSchool.address); 
      }
      return school;
    });
  
    setSchools(updatedSchools);
    setSelectedSchoolId(null);
  };

  const handleEditSchool = (id: number) => {
    setSelectedSchoolId(id);
  };

  const filteredSchools = searchTerm
    ? schools.filter((school) =>
        removeAccents(school.getName().toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
      )
    : schools;

  return {
    schools: filteredSchools,
    error,
    addSchool,
    editSchool,
    handleEditSchool,
    setSearchTerm,
    selectedSchoolId,
    setSelectedSchoolId,
  };
}
