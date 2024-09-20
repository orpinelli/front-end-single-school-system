import { FaSchool } from "react-icons/fa";
interface SchoolListProps {
  schools: { id: number; name: string }[];
}

const SchoolList: React.FC<SchoolListProps> = ({ schools }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Escolas</h1>
      <ul className="space-y-4">
        {schools.map((school) => (
          <li key={school.id}>
            <a
              href={`/turmas/${school.id}`}
              className="flex items-center text-xl text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <FaSchool className="mr-3 text-blue-500" />
              {school.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
