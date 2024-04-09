import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication",
  description: "",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider
//       appearance={{
//         baseTheme: dark,
//       }}
//     >
//       <html lang='en'>
//         <body className={`${inter.className} bg-dark-1`}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body
          className={`${inter.className} bg-dark-1`}
          style={{ background: "linear-gradient(to right, #333333, #555555)" }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

