import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Chat Application",
  description: "This is a discord clone app made using NextJs13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(open.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            // forcedTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {/* <SocketProvider> */}
              <ModalProvider />
              {children}
            {/* </SocketProvider> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
