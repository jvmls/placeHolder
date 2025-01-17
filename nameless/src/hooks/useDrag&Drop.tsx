import { useState } from "react";

interface DraggableItem {
  id: string;
  x: number;
  y: number;
  label: string;
  style?: React.CSSProperties; // Optional, for items with custom styles
}

export function useDragAndDrop() {
  const [items, setItems] = useState<DraggableItem[]>([]);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("id", id); // Existing item ID
  };

  const handleDrop = (e: React.DragEvent, containerRect: DOMRect) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const enemyData = e.dataTransfer.getData("enemy"); // Check for sidebar item data
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setItems((prevItems) => {
      if (enemyData) {
        // Add a new item dragged from the sidebar
        const newEnemy = JSON.parse(enemyData);
        const newId = `item-${Date.now()}`;
        return [
          ...prevItems,
          { id: newId, x, y, label: newEnemy.enemy, style: newEnemy.style },
        ];
      } else if (id) {
        // Update position of an existing item
        return prevItems.map((item) =>
          item.id === id ? { ...item, x, y } : item
        );
      }
      return prevItems;
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allows dropping
  };

  return {
    items,
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
}
