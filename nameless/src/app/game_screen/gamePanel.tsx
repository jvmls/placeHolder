"use client";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import useDragger from "@/hooks/useDragger";
import useOpenNewWindow from "@/hooks/useOpenNewWindow";

export default function GamePanel() {
  return (
    <div className="h-full w-full ">
      <ResizablePanelGroup direction="vertical">
        {/* Top Section */}
        <ResizablePanel defaultSize={50} className="h-full">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-full rounded-lg border"
          >
            {/* Enemies Panel */}
            <ResizablePanel defaultSize={50} minSize={20} className="h-full">
              <div className="flex h-full items-center overflow-hidden border">
                <span className="font-semibold">Enemies</span>
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
          <div className="flex h-full flex-col items-center justify-center p-6 border">
            <h1 className="font-semibold">Bottom Panel</h1>
            <Button onClick={useOpenNewWindow("<h1> Character Sheet<h1>")}>
              Open Character Sheet
            </Button>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
