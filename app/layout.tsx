import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body {...{ 'cz-shortcut-listen': 'true' }}>{children}</body>
    </html>
  );
}
