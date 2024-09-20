"use client";

import SchoolList from "@/components/Schools/Schools";
import { useSchoolContainer } from "./SchoolListContainer.hook";
import ModalAddSchool from "@/components/Schools/ModalAddSchool/ModalAddSchool";
import ModalEditSchool from "@/components/Schools/ModalEditSchool/ModalEditSchool";

export default function SchoolListContainer() {
  const {
    schools,
    error,
    addSchool,
    editSchool,
    handleEditSchool,
    setSearchTerm,
    selectedSchoolId,
    setSelectedSchoolId,
  } = useSchoolContainer();

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
      <div className="mb-6">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar escola..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
        />
      </div>
      <SchoolList schools={schools} onEditSchool={handleEditSchool} />
      {selectedSchoolId && (
        <ModalEditSchool
          school={schools.find((school) => school.id === selectedSchoolId)!}
          onSave={editSchool}
          onClose={() => setSelectedSchoolId(null)}
        />
      )}
    </div>
  );
}
