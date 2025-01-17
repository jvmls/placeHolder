"use client";
import { Button } from "@/components/ui/button";
import { useDragAndDrop } from "@/hooks/useDrag&Drop";

export default function GamePanel() {
  const sheetPopup = () => {
    const popupWindow = window.open("/sheet", "_blank", "width=800,height=600");
    if (!popupWindow) {
      console.error("Failed to open popup window.");
    }
  };

  const { items, handleDragStart, handleDrop, handleDragOver } =
    useDragAndDrop();

  return (
    <div className="h-full w-full">
      <div className="flex flex-col h-full">
        {/* Top Section */}
        <div className="flex flex-row h-1/2">
          {/* Enemies Panel */}
          <div className="flex-1 relative border bg-gray-100 rounded overflow-hidden">
            <div
              className="relative h-full w-full"
              onDrop={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                handleDrop(e, rect);
              }}
              onDragOver={handleDragOver}
            >
              <span className="right-1/2 bottom-1/2 absolute select-none">
                ENEMIES
              </span>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="w-20 h-20 absolute cursor-pointer text-black overflow-hidden"
                  style={{
                    top: `${item.y}px`,
                    left: `${item.x}px`,
                  }}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                >
                  {item.style ? (
                    <span
                      className="w-full h-full bg-cover flex"
                      style={item.style}
                    />
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Players Panel */}
          <div className="flex-1 flex items-center justify-center p-6 border">
            <span className="font-semibold">Players</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="h-1/2 flex items-center justify-center p-6 border">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">Bottom Panel</h1>
            <Button onClick={sheetPopup}>Open Character Sheet</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
