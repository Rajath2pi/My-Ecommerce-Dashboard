"use client";

import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dark, setDark] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState(false);

  // Run once on client to set theme correctly
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setMounted(true);
  }, []);

  // Update localStorage + HTML class when theme changes
  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  if (!mounted) {
    // Avoid hydration mismatch — render blank until mounted
    return <html><body><main>{children}</main></body></html>;
  }

  return (
    <html lang="en">
      <body>
        {/* Theme Toggle Button */}
        <button
          style={{ position: "fixed", top: 56, right: 16, zIndex: 1000 }}
          onClick={() => setDark((prev) => !prev)}
          className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow transition"
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>

        <main>{children}</main>
      </body>
    </html>
  );
}
