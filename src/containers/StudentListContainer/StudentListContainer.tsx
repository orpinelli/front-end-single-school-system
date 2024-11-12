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

  const studentsData = students.map(student => ({
    id: student.getId(), 
    name: student.getName(), 
    registration: student.getRegistration(),
  }));

  return <StudentList students={studentsData} />;
}
