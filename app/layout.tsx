import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"OnlineTracker",description:"An online music tracker with AI assistance"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}