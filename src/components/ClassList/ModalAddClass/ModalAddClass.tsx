import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function ModalAddClass({
  onAddClass,
}: {
  onAddClass: (classItem: { name: string; series: string }) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newClass, setNewClass] = useState({
    name: "",
    series: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddClass = () => {
    if (newClass.name && newClass.series) {
      onAddClass(newClass);
      setNewClass({ name: "", series: "" });
      setIsOpen(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
      >
        <p className="mr-2">Adicionar Turma</p>
        <IoIosAddCircle />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white w-[80%] max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Adicionar Nova Turma</h2>
            <input
              type="text"
              name="name"
              placeholder="Nome da Turma"
              value={newClass.name}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="text"
              name="series"
              placeholder="Série da Turma"
              value={newClass.series}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border border-gray-300 rounded text-black"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg mr-2"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={handleAddClass}
              >
                Salvar Turma
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
