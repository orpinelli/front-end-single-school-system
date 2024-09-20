interface ClassListProps {
  classes: { id: number; name: string; series: string }[];
}

const ClassList: React.FC<ClassListProps> = ({ classes }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Turmas
      </h1>
      <ul className="space-y-4">
        {classes.map((classItem) => (
          <li
            key={classItem.id}
            className="bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4"
          >
            <a
              href={`/turmas/${classItem.id}/classes/${classItem.id}`}
              className="flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors duration-200"
            >
              <span className="text-lg font-medium">{classItem.name}</span>
              <span className="text-sm text-gray-500">{classItem.series}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
