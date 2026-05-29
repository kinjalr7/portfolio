import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-iota-lemon-l97i0onvsw.vercel.app"),
  title: "Kinjal Rathod | AI & ML Engineer & Autonomous Agents Specialist",
  description: "Explore the professional portfolio of Kinjal Rathod, an AI/ML Engineer specializing in RAG systems, Autonomous AI Agents (Hermes, Openclaw), Time-Series Forecasting, and Full-Stack AI Dashboards.",
  keywords: [
    "Kinjal Rathod", 
    "AI Engineer", 
    "ML Engineer", 
    "Autonomous Agents", 
    "RAG", 
    "LangChain", 
    "Hermes Agent", 
    "Python Developer", 
    "Next.js AI Dashboard", 
    "Nexus Stock Forecasting"
  ],
  authors: [{ name: "Kinjal Rathod" }],
  creator: "Kinjal Rathod",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kinjal Rathod | AI & ML Engineer Portfolio",
    description: "Professional portfolio of Kinjal Rathod showcasing state-of-the-art AI automation, Agentic frameworks, and predictive modeling.",
    url: "https://portfolio-iota-lemon-l97i0onvsw.vercel.app",
    siteName: "Kinjal Rathod Portfolio",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Kinjal Rathod Portfolio Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinjal Rathod | AI & ML Engineer & Autonomous Agents Specialist",
    description: "Explore the professional portfolio of Kinjal Rathod, specializing in RAG, Agentic Loops, and Machine Learning models.",
    images: ["/assets/hero.png"],
    creator: "@kinjalr7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kinjal Rathod",
    "url": "https://portfolio-iota-lemon-l97i0onvsw.vercel.app",
    "sameAs": [
      "https://github.com/kinjalr7",
      "https://www.linkedin.com/in/kinjalrathod2908/"
    ],
    "jobTitle": "AI & ML Specialist",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "LDRP Institute of Technology and Research",
      "sameAs": "https://www.ldrp.ac.in"
    },
    "description": "Information Technology student specializing in RAG architectures, multi-agent frameworks, time-series forecasting, and rich interface developments.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Retrieval-Augmented Generation (RAG)",
      "Autonomous AI Agents",
      "Python Software Development",
      "Time-Series Forecasting",
      "Next.js & React Web Engineering"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
