"use client";
import ClassList from "@/components/ClassList/ClassList";
import { useClassContainer } from "./ClassContainer.hook";
import ModalAddClass from "@/components/ClassList/ModalAddClass/ModalAddClass";

export default function ClassListContainer({ schoolId }: { schoolId: number }) {
  const { classes, error, addClass } = useClassContainer(schoolId);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Turmas</h1>
        <ModalAddClass onAddClass={addClass} />
      </div>
      <ClassList classes={classes} />
    </div>
  );
}
