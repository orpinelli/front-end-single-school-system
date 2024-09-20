"use client";

import { useEffect, useState } from "react";
import { School } from "@/lib/School";
import { SchoolWithCounts, ISchool } from "@/interfaces/ISchool";
import { Class } from "@/lib/Class";

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export function useSchoolContainer() {
  const [schools, setSchools] = useState<SchoolWithCounts[]>([]);
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
        const data: { schools: ISchool[] } = await response.json();

        const loadedSchools = data.schools.map((schoolData) => {
          const school = new School(
            schoolData.id,
            schoolData.name,
            schoolData.address,
            schoolData.classes.map(
              (classData) =>
                new Class(
                  classData.id,
                  classData.name,
                  classData.series,
                  classData.students
                )
            )
          );

          return {
            ...school,
            numberOfClasses: school.getNumberOfClasses(),
            numberOfStudents: school.getNumberOfStudents(),
            addClass: school.addClass,
          };
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
    const nextId = schools.length ? schools[schools.length - 1].id + 1 : 1;
    const school = new School(nextId, newSchool.name, newSchool.address, []);

    const newSchoolWithCounts: SchoolWithCounts = {
      ...school,
      numberOfClasses: 0,
      numberOfStudents: 0,
      addClass: school.addClass,
    };

    setSchools([...schools, newSchoolWithCounts]);
  };

  const editSchool = (updatedSchool: {
    id: number;
    name: string;
    address: string;
  }) => {
    const updatedSchools = schools.map((school) => {
      if (school.id === updatedSchool.id) {
        const updatedSchoolObject = new School(
          updatedSchool.id,
          updatedSchool.name,
          updatedSchool.address,
          school.classes
        );

        return {
          ...updatedSchoolObject,
          numberOfClasses: updatedSchoolObject.getNumberOfClasses(),
          numberOfStudents: updatedSchoolObject.getNumberOfStudents(),
          addClass: updatedSchoolObject.addClass,
        };
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
        removeAccents(school.name.toLowerCase()).includes(
          removeAccents(searchTerm.toLowerCase())
        )
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
