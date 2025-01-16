import { useState } from "react";

export function useDragAndDrop() {
  const [droppedObjects, setDroppedObjects] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const objectType = e.dataTransfer.getData("objectType");
    if (objectType) {
      setDroppedObjects((prev) => [...prev, objectType]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allows the drop
  };

  const deleteObject = (index: number) => {
    setDroppedObjects((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    droppedObjects,
    handleDrop,
    handleDragOver,
    deleteObject,
  };
}
