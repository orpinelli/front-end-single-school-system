interface ClassListProps {
  classes: { id: number; name: string; series: string }[];
}

const ClassList: React.FC<ClassListProps> = ({ classes }) => {
  return (
    <div>
      <h1>Turmas</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <a href={`/turmas/${classItem.id}/classes/${classItem.id}`}>
              {classItem.name} - {classItem.series}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
