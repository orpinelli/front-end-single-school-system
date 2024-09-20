import { useState } from "react";
import { SchoolWithCounts } from "@/interfaces/ISchool";
import { FaEdit } from "react-icons/fa";

interface SchoolSearchProps {
  schools: SchoolWithCounts[];
  onEditSchool: (id: number) => void;
}

const SchoolSearch: React.FC<SchoolSearchProps> = ({
  schools,
  onEditSchool,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar escola..."
        className="w-full p-2 mb-6 border border-gray-300 rounded-lg text-black"
      />
      {filteredSchools.length === 0 ? (
        <p className="text-gray-500">Nenhuma escola encontrada</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSchools.map((school) => (
            <li
              key={school.id}
              className="bg-white p-4 rounded-lg flex flex-col justify-between relative"
            >
              <a href={`/turmas/${school.id}`}>
                <div className="pb-0 pt-2 px-4 flex-col items-start">
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden block w-full text-black">
                    {school.name}
                  </span>
                  <div className="flex justify-between gap-4 items-center mt-2">
                    <small className="text-black">
                      Turmas: {school.numberOfClasses}
                    </small>
                    <small className="text-black">
                      Alunos: {school.numberOfStudents}
                    </small>
                  </div>
                </div>
              </a>
              <FaEdit
                onClick={() => onEditSchool(school.id)}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SchoolSearch;
