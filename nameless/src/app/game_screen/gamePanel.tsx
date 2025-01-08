"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Draggable from "react-draggable";

export default function GamePanel() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-full w-full overflow-hidden"
    >
      {/* Top Section */}
      <ResizablePanel defaultSize={50} className="h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full rounded-lg border"
        >
          {/* Enemies Panel */}
          <ResizablePanel defaultSize={50} minSize={20} className="h-full">
            <div className="flex h-full items-center justify-center p-6 border">
              <span id="wigga" className="font-semibold">
                Enemies
              </span>
            </div>
          </ResizablePanel>

          {/* Horizontal Resize Handle */}
          <ResizableHandle className="" />

          {/* Players Panel */}
          <ResizablePanel defaultSize={50} minSize={20} className="h-full">
            <div className="flex h-full items-center justify-center p-6 border">
              <span className="font-semibold">Players</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      {/* Vertical Resize Handle */}
      <ResizableHandle className="h-4 w-full bg-blue-500" />

      {/* Bottom Section */}
      <ResizablePanel
        defaultSize={50}
        minSize={20}
        maxSize={80}
        className="h-full"
      >
        <div className="flex h-full items-center justify-center p-6 border">
          <span className="font-semibold">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
