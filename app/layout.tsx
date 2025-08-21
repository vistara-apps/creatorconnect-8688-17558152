
import "./globals.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Creator Marketplace",
  description: "Decentralized freelance marketplace for attention creators",
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: "/hero.png",
      button: {
        title: "Launch Creator Marketplace",
        action: {
          type: "launch_frame",
          name: "Creator Marketplace",
          url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
          splashImageUrl: "/splash.png",
          splashBackgroundColor: "#0f0a1a",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
