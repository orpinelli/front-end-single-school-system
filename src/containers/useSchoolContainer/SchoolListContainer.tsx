"use client";
import { useState } from "react";
import SchoolList from "@/components/Schools/Schools";
import { useSchoolContainer } from "./SchoolListContainer.hook";
import ModalAddSchool from "@/components/Schools/ModalAddSchool/ModalAddSchool";
import ModalEditSchool from "@/components/Schools/ModalEditSchool/ModalEditSchool";

export default function SchoolListContainer() {
  const { schools, error, addSchool, editSchool } = useSchoolContainer();
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(null);

  if (error) {
    return <div>{error}</div>;
  }

  const handleEditSchool = (id: number) => {
    setSelectedSchoolId(id);
  };

  const handleSaveEdit = (updatedSchool: {
    id: number;
    name: string;
    address: string;
  }) => {
    editSchool(updatedSchool);
    setSelectedSchoolId(null);
  };

  return (
    <div className="shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Escolas</h1>
        <div className="flex items-center text-center self-center">
          <ModalAddSchool onAddSchool={addSchool} />
        </div>
      </div>
      <SchoolList schools={schools} onEditSchool={handleEditSchool} />

      {selectedSchoolId && (
        <ModalEditSchool
          school={schools.find((school) => school.id === selectedSchoolId)!}
          onSave={handleSaveEdit}
          onClose={() => setSelectedSchoolId(null)}
        />
      )}
    </div>
  );
}
