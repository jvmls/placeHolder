import "./globals.css";
import { Toaster } from "../components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster className="text-white" />
      </body>
    </html>
  );
}
