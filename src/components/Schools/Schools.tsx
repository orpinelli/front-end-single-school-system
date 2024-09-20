import { SchoolWithCounts } from "@/interfaces/ISchool";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface SchoolListProps {
  schools: SchoolWithCounts[];
}

const SchoolList: React.FC<SchoolListProps> = ({ schools }) => {
  return (
    <div className="shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {schools.map((school) => (
          <li
            key={school.id}
            className="bg-white p-4 rounded-lg flex flex-col justify-between"
          >
            <a href={`/turmas/${school.id}`}>
              <Card className="h-full">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden block w-full text-black">
                    {school.name}
                  </span>
                  <div className="flex justify-between gap-4 items-center mt-2">
                    <small className=" text-black">
                      Turmas: {school.numberOfClasses}
                    </small>
                    <small className=" text-black">
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
