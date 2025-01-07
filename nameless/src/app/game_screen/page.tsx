"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useDragger from "@/hooks/useDragger";

export default function GameScreen() {
  useDragger("wigga");
  return (
    <div className="flex h-screen w-screen bg-slate-900 text-white">
      <ResizablePanelGroup direction="vertical" className="w-full">
        {/* Top Section */}
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6 border">
                <span id="wigga" className="font-semibold">
                  Enemies
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle className="h-full w-4 bg-red-500" />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6 border">
                <span className="font-semibold">Players</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        {/* Resize Handle between top and bottom sections */}
        <ResizableHandle className="h-4 w-full bg-blue-500" />

        {/* Bottom Section */}
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6 border">
            <span className="font-semibold">Bottom Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
