"use client";
import { useStudentContainer } from "./StudentListContainer.hook";
import StudentList from "@/components/StudentList/StudentList";

interface StudentListContainerProps {
  classId: number;
}

export default function StudentListContainer({
  classId,
}: StudentListContainerProps) {
  const { students, error } = useStudentContainer(classId);

  if (error) {
    return <div>{error}</div>;
  }

  return <StudentList students={students} />;
}
