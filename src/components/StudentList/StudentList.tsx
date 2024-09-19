interface StudentListProps {
  students: { id: number; name: string; registration: string }[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      <h1>Alunos</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Matrícula: {student.registration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
