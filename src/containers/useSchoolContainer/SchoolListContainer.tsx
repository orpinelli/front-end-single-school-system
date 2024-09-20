"use client";
import SchoolList from "@/components/Schools/Schools";
import { useSchoolContainer } from "./SchoolListContainer.hook";

export default function SchoolListContainer() {
  const { schools, error } = useSchoolContainer();

  if (error) {
    return <div>{error}</div>;
  }

  return <SchoolList schools={schools} />;
}
