"use client";

import React, { useState } from "react";

export default function ModalEditSchool({
  school,
  onSave,
  onClose,
}: {
  school: { id: number; name: string; address: string };
  onSave: (updatedSchool: {
    id: number;
    name: string;
    address: string;
  }) => void;
  onClose: () => void;
}) {
  const [updatedSchool, setUpdatedSchool] = useState({
    id: school.id,
    name: school.name,
    address: school.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedSchool({
      ...updatedSchool,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(updatedSchool);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Editar Escola</h2>
        <input
          type="text"
          name="name"
          value={updatedSchool.name}
          onChange={handleChange}
          placeholder="Nome da Escola"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <input
          type="text"
          name="address"
          value={updatedSchool.address}
          onChange={handleChange}
          placeholder="Endereço da Escola"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
