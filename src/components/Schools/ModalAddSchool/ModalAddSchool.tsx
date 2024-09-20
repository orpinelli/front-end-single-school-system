import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function ModalAddSchool({
  onAddSchool,
}: {
  onAddSchool: (school: { name: string; address: string }) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [newSchool, setNewSchool] = useState({
    name: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSchool({
      ...newSchool,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSchool = () => {
    if (newSchool.name && newSchool.address) {
      onAddSchool(newSchool);
      setNewSchool({ name: "", address: "" });
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
        <p className="mr-2">Adicionar Escola</p>
        <IoIosAddCircle />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick} // Detecta cliques no fundo (overlay)
        >
          <div className="bg-white w-[80%] max-w-lg p-6 rounded-lg shadow-lg z-50 relative">
            <h2 className="text-xl font-bold mb-4">Adicionar Nova Escola</h2>
            <p className="text-gray-600 mb-4">
              Preencha as informações para adicionar uma nova escola ao sistema.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Nome da Escola"
              value={newSchool.name}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="text"
              name="address"
              placeholder="Endereço da Escola"
              value={newSchool.address}
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
                onClick={handleAddSchool}
              >
                Salvar Escola
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
