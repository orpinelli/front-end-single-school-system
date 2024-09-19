interface SchoolListProps {
  schools: { id: number; name: string }[];
}

const SchoolList: React.FC<SchoolListProps> = ({ schools }) => {
  return (
    <div>
      <h1>Escolas</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            <a href={`/turmas/${school.id}`}>{school.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
