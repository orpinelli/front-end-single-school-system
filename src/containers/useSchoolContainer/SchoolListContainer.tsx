"use client";
import SchoolList from "@/components/Schools/Schools";
import { useSchoolContainer } from "./SchoolListContainer.hook";
import ModalAddSchool from "@/components/Schools/ModalAddSchool/ModalAddSchool";

export default function SchoolListContainer() {
  const { schools, error, addSchool } = useSchoolContainer(); // Recebe a função addSchool do hook

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Escolas</h1>
        <div className="flex items-center text-center self-center">
          <ModalAddSchool onAddSchool={addSchool} />
        </div>
      </div>
      <SchoolList schools={schools} />
    </div>
  );
}
