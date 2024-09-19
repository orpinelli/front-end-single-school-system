interface ClassStudentsPageProps {
  params: {
    classId: string;
  };
}

import StudentListContainer from "@/containers/useStudentListContainer/StudentListContainer";

export default function ClassStudentsPage({ params }: ClassStudentsPageProps) {
  const classId = Number(params.classId); // Extrai o classId dos parâmetros da URL

  return <StudentListContainer classId={classId} />;
}
