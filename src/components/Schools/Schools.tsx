import { SchoolWithCounts } from "@/interfaces/ISchool";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";

interface SchoolListProps {
  schools: SchoolWithCounts[];
  onEditSchool: (id: number) => void;
}

const SchoolList: React.FC<SchoolListProps> = ({ schools, onEditSchool }) => {
  return (
    <div className="shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {schools.map((school, index) => (
          <li
            key={`${school.id}-${index}`}
            className="bg-white p-4 rounded-lg flex flex-col justify-between relative  hover:bg-gray-300 transition duration-300"
          >
            <a href={`/turmas/${school.id}`}>
              <Card className="h-full">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div className="flex justify-between w-full items-center">
                    <span className="text-ellipsis whitespace-nowrap overflow-hidden block w-full text-black">
                      {school.name}
                    </span>
                    <FaEdit
                      className="text-gray-600 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        onEditSchool(school.id);
                      }}
                    />
                  </div>
                  <div className="flex justify-between gap-4 items-center mt-2">
                    <small className="text-black">
                      Turmas: {school.numberOfClasses}
                    </small>
                    <small className="text-black">
                      Alunos: {school.numberOfStudents}
                    </small>
                  </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 flex justify-center"></CardBody>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
