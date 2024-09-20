interface SchoolClassesPageProps {
  params: {
    schoolId: string;
  };
}

import ClassListContainer from "@/containers/ClassContainer/ClassListContainer";

export default function SchoolClassesPage({ params }: SchoolClassesPageProps) {
  const schoolId = Number(params.schoolId);

  return <ClassListContainer schoolId={schoolId} />;
}
