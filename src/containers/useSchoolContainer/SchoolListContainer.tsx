"use client";
import SchoolList from "@/components/Schools/Schools";
import { useSchoolContainer } from "./SchoolListContainer.hook";

export default function SchoolListContainer() {
  const { schools } = useSchoolContainer();

  return <SchoolList schools={schools} />;
}
