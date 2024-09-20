interface StudentListProps {
  students: { id: number; name: string; registration: string }[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-lg">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Alunos
      </h1>
      <ul className="space-y-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-800">
                {student.name}
              </span>
              <span className="text-sm text-gray-500">
                Matrícula: {student.registration}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
