import { Class } from "@/lib/Class";
import { School } from "@/lib/School";
import { Student } from "@/lib/Student";

export interface SearchProps {
  type: "school" | "class" | "student";
  data: School[] | Class[] | Student[];
  onItemSelect: (item: School | Class | Student) => void;
}
