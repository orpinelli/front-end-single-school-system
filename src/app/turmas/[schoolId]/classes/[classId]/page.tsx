interface ClassStudentsPageProps {
  params: {
    classId: string;
  };
}

import StudentListContainer from "@/containers/StudentListContainer/StudentListContainer";

export default function ClassStudentsPage({ params }: ClassStudentsPageProps) {
  const classId = Number(params.classId);
  return <StudentListContainer classId={classId} />;
}
