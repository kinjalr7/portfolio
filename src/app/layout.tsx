import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinjal Rathod | AI & ML Engineer & Autonomous Agents Specialist",
  description: "Explore the professional portfolio of Kinjal Rathod, an AI/ML Engineer specializing in RAG systems, Autonomous AI Agents (Hermes, Openclaw), Time-Series Forecasting, and Full-Stack AI Dashboards.",
  keywords: ["Kinjal Rathod", "AI Engineer", "ML Engineer", "Autonomous Agents", "RAG", "LangChain", "Hermes Agent", "Python Developer", "Next.js AI Dashboard", "Nexus Stock Forecasting"],
  authors: [{ name: "Kinjal Rathod" }],
  openGraph: {
    title: "Kinjal Rathod | AI & ML Engineer Portfolio",
    description: "Professional portfolio of Kinjal Rathod showcasing state-of-the-art AI automation, Agentic frameworks, and predictive modeling.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
