import { useClassContainer } from "./useClassContainer.hook";
import ClassList from "@/components/ClassList/ClassList";
interface ClassListContainerProps {
  schoolId: number;
}

export default function ClassListContainer({
  schoolId,
}: ClassListContainerProps) {
  const { classes, error } = useClassContainer(schoolId);

  if (error) {
    return <div>{error}</div>;
  }

  return <ClassList classes={classes} />;
}
