"use client";

export default function useOpenNewWindow(string: string) {
  if (!string) return;
  const handleOpenWindow = () => {
    const newWindow = window.open(
      "",
      "_blank",
      "width=600,height=600,resizable=yes,scrollbars=yes"
    );

    if (newWindow) {
      newWindow.document.write(string);
      newWindow.document.close();
    }
  };
  return handleOpenWindow;
}
