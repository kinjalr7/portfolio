"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Terminal,
  GraduationCap,
  Award,
  Send,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  MessageSquare
} from "lucide-react";

// Inline Custom SVGs for Social Platforms to maintain clean zero-compile dependencies
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Interactive Neural Network Canvas Component for AI/ML theme
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle/Neuron Class
    class Neuron {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      glow: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow organic floating speed
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 2.2 + 1.2;
        this.glow = Math.random() * 8 + 4;
      }

      update(mouseX: number | null, mouseY: number | null) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off canvas boundaries smoothly
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse attraction (Gravity)
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            this.x += (dx / dist) * force * 0.6;
            this.y += (dy / dist) * force * 0.6;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "rgba(255, 229, 127, 0.95)";
        c.shadowColor = "rgba(212, 175, 55, 0.8)";
        c.shadowBlur = this.glow;
        c.fill();
        c.shadowBlur = 0; // reset shadow index
      }
    }

    // Initialize 55 neurons
    const neurons: Neuron[] = Array.from({ length: 55 }, () => new Neuron());
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw active synapses
      ctx.lineWidth = 0.8;
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const n1 = neurons[i];
          const n2 = neurons[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.32;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse cursor
      if (mouseX !== null && mouseY !== null) {
        neurons.forEach((n) => {
          const dx = n.x - mouseX!;
          const dy = n.y - mouseY!;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.45;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouseX!, mouseY!);
            ctx.strokeStyle = `rgba(255, 229, 127, ${alpha})`;
            ctx.stroke();
          }
        });
      }

      // Update and draw neurons
      neurons.forEach((n) => {
        n.update(mouseX, mouseY);
        n.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: "transparent"
      }}
    />
  );
};

// Types
interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  summary: string;
  highlights: string[];
  role: string;
  architecture: string;
  link?: string;
}

export default function Home() {
  // Navigation scrolling state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills interactive category state
  const [activeSkillCategory, setActiveSkillCategory] = useState<"ai" | "ml" | "web" | "tools">("ai");

  // Selected project for Details Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Timeline scroll-driven tracking ref
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Scale timeline progress track
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Profile Photo States
  const [profileImg, setProfileImg] = useState("/assets/profile.png");
  const [imageError, setImageError] = useState(false);

  // Tracking Global Mouse Positions for Spotlight
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Card Mouse Highlight + 3D Tilt calculation
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set relative CSS custom coords
    card.style.setProperty("--card-mouse-x", `${x}px`);
    card.style.setProperty("--card-mouse-y", `${y}px`);

    // Calculate rotational values based on midpoints (max tilt degrees: 5)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  // Header change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form Submission via Web3Forms API
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }
    setFormStatus("sending");

    // Retrieve the Web3Forms key from the environment variables or a hardcoded placeholder
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

    // Format the email message body in a beautiful and highly structured layout before transmission
    const structuredMessage = `
====================================================================
                PORTFOLIO CONTACT FORM SUBMISSION
====================================================================

  [SENDER DETAILS]
  • Name:      ${formData.name}
  • Email:     ${formData.email}
  • Date/Time: ${new Date().toLocaleString("en-US", { timeZoneName: "short" })}
  • Subject:   ${formData.subject || "Not Specified"}

  ------------------------------------------------------------------
  [MESSAGE CONTENT]
  
  ${formData.message.split("\n").join("\n  ")}

  ------------------------------------------------------------------
  Sent securely via the serverless contact gateway at:
  Kinjal Rathod - AI/ML Specialist Portfolio
====================================================================
    `.trim();

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY" || accessKey === "") {
      console.warn(
        "Web3Forms Access Key is not configured. Falling back to simulated successful transmit for demo purposes. " +
        "Please create a .env.local file in your workspace root and add: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here"
      );
      
      // Simulate successful submission for demonstration
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 6000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          replyto: formData.email, // Enables direct replies in the email client
          subject: formData.subject || `New Inbound Message from ${formData.name}`,
          message: structuredMessage,
          from_name: "Kinjal Rathod Portfolio"
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 6000);
      } else {
        console.error("Web3Forms API rejected the post request:", result);
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Network communication failure submitting contact form:", err);
      setFormStatus("error");
    }
  };

  // Projects list
  const projects: Project[] = [
    {
      id: "nexus",
      title: "Nexus - Stock Market Analytics",
      subtitle: "Time Series Forecasting Hub",
      tech: ["Python", "TypeScript", "Streamlit", "Flask", "ARIMA", "Prophet", "LSTM", "Pandas", "NumPy", "Matplotlib"],
      summary: "Designed and implemented a full-stack advanced solution for stock market time series analysis and forecasting, comparing classical statistical models and deep learning engines.",
      role: "Lead Full-Stack AI Engineer",
      architecture: "Python Flask backend handling quantitative compute + LSTM models, interacting with TypeScript components via REST APIs. Visual analytics powered by custom Streamlit templates.",
      highlights: [
        "Implemented ARIMA, Prophet, and LSTM models side-by-side to compare forecasting accuracy metrics.",
        "Integrated auto-update mechanisms and model comparison dashboard controls for actionable market insights.",
        "Engineered visual time-series dashboards demonstrating moving averages, trend breakouts, and predictive confidence intervals."
      ],
      link: "#"
    },
    {
      id: "seo-improve",
      title: "SEO-Improve - Hermes Agent",
      subtitle: "Autonomous SEO & Content Assistant",
      tech: ["Python", "Hermes Agent Framework", "OpenRouter-API", "NLP (Natural Language)", "Git", "GitHub", "Prompt Engineering"],
      summary: "Built an AI-powered autonomous agent system using the Hermes Agent framework to optimize website architecture, audit core SEO metrics, and automate keyword enrichment workflows.",
      role: "AI Agent Architect",
      architecture: "Event-driven architecture built on top of the Hermes Framework, orchestrating API connections to OpenRouter models for deep NLP evaluation, metadata rewriting, and repository pull requests.",
      highlights: [
        "Experimented with autonomous agents designed to parse site maps, locate technical errors, and optimize content density.",
        "Developed customized prompts and structured JSON interfaces ensuring reliable extraction of SEO meta tags and link structures.",
        "Built a command-line interface (CLI) to trigger, audit, and push agent actions to Git pipelines."
      ],
      link: "#"
    },
    {
      id: "analytics-dashboard",
      title: "AI-Powered Social Media Analytics",
      subtitle: "Real-time Corporate Dashboard",
      tech: ["React", "Next.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "Chart.js", "JWT Auth", "ReportLab (PDF)"],
      summary: "Developed a centralized real-time social media analytics aggregator displaying post engagement metrics, sentiments, and PDF report creation modules.",
      role: "Full Stack Developer",
      architecture: "Next.js frontend featuring high-contrast dashboards interacting with a FastAPI backend. Utilizes SQLAlchemy ORM for relational schemas in PostgreSQL, with background workers generating scheduled PDF outputs.",
      highlights: [
        "Designed beautiful, interactive charts mapping views, likes, comments, and conversion graphs over custom date ranges.",
        "Built secure token-based JWT authentication layers protecting confidential client campaign telemetry.",
        "Integrated PDF rendering engines with custom styling for exporting executive summary spreadsheets in one click."
      ],
      link: "#"
    },
    {
      id: "smartin",
      title: "SmartIn Voice Companion",
      subtitle: "Smart Interactive Agent",
      tech: ["Python", "SpeechRecognition", "PyAudio", "pyttsx3", "Wikipedia-API", "smtplib"],
      summary: "Developed a responsive, low-latency smart voice assistant capable of parsing, understanding, and carrying out vocal commands.",
      role: "Sole Creator",
      architecture: "Highly modularized Python system processing native sound arrays, transforming wave audio into text formats via speech engines, and performing contextual actions.",
      highlights: [
        "Optimized audio capture structures using PyAudio to achieve high-accuracy parser ratings and under 250ms latency.",
        "Programmed API configurations for retrieving Wikipedia articles, mailing files, and managing shell actions via vocal instructions."
      ],
      link: "#"
    }
  ];

  // Animated Skills Categorization
  const skillCategories = {
    ai: {
      title: "AI & Agentic Systems",
      icon: <Brain className="skill-icon" size={24} />,
      skills: ["LangChain", "RAG (Retrieval-Augmented)", "Hermes Framework", "Paperclip", "Openclaw", "PI", "Vector Databases (Qdrant, Faiss)"]
    },
    ml: {
      title: "ML & Data Science",
      icon: <Cpu className="skill-icon" size={24} />,
      skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Open CV", "Matplotlib"]
    },
    web: {
      title: "Web & Core Backend",
      icon: <Terminal className="skill-icon" size={24} />,
      skills: ["SQL", "FAST-API", "Flask", "Streamlit", "PostgreSQL", "MYSQL", "HTML5", "CSS3 / Vanilla CSS", "JavaScript (ES6+)"]
    },
    tools: {
      title: "Tools & Automation",
      icon: <Database className="skill-icon" size={24} />,
      skills: ["MeiliSearch", "N8N Workflow", "Power BI", "GA4 Analytics", "Jupyter notebook", "VS code", "Docker", "Git / GitHub"]
    }
  };

  // Hero title stagger reveal configurations
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  const titleWordVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    }
  };

  return (
    <>
      {/* Global Background Animation Layers */}
      <div className="cursor-glow-bg"></div>
      <div className="ambient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Dynamic Frosted Header */}
      <header className={`glass-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo" id="nav-logo-btn">
            <span className="gold-gradient-text gold-glow-text">KR.</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link" id="nav-link-about">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" id="nav-link-skills">
                Expertise
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link" id="nav-link-experience">
                Timeline
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" id="nav-link-projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="gold-btn" id="nav-link-contact" style={{ padding: "8px 20px", fontSize: "0.9rem" }}>
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="mobile-menu-btn"
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              background: "rgba(3, 3, 3, 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-glass)",
              zIndex: 999,
              padding: "24px"
            }}
          >
            <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none" }}>
              <li>
                <a
                  href="#about"
                  className="nav-link"
                  id="mobile-nav-about"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="nav-link"
                  id="mobile-nav-skills"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="nav-link"
                  id="mobile-nav-experience"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-link"
                  id="mobile-nav-projects"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="gold-btn"
                  id="mobile-nav-contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: "block", textAlign: "center" }}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="section-container">
            <div className="hero-grid">
              <div className="hero-content">
                <motion.div
                  className="hero-badge"
                  id="hero-status-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <div className="pulse-dot"></div>
                  <span>Available for AI/ML Roles</span>
                </motion.div>

                {/* Staggered text reveal title */}
                <motion.h1
                  className="hero-title"
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span variants={titleWordVariants} className="word-reveal">
                    Crafting
                  </motion.span>{" "}
                  <motion.span variants={titleWordVariants} className="gold-gradient-text gold-glow-text word-reveal">
                    Autonomous
                  </motion.span>{" "}
                  <br />
                  <motion.span variants={titleWordVariants} className="word-reveal">
                    Intelligence
                  </motion.span>{" "}
                  <motion.span variants={titleWordVariants} className="word-reveal">
                    & Models.
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Hi, I'm <strong style={{ color: "var(--accent-gold-light)", fontWeight: 600 }}>Kinjal Rathod</strong>. 
                  An Information Technology undergraduate specializing in RAG architectures, multi-agent frameworks, time-series forecasting, and rich interface developments.
                </motion.p>

                <motion.div
                  className="hero-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <a href="#projects" className="gold-btn" id="hero-projects-cta">
                    Explore Work <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="gold-btn-outline" id="hero-contact-cta">
                    Get in Touch
                  </a>
                </motion.div>

                <motion.div
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginTop: "32px",
                    alignItems: "center"
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <a
                    href="https://github.com/kinjalr7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    id="hero-github-link"
                    title="GitHub Profile"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kinjalrathod2908/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    id="hero-linkedin-link"
                    title="LinkedIn Profile"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="mailto:kinjalrathodmr@gmail.com"
                    className="footer-social-link"
                    id="hero-email-link"
                    title="Send Email"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <Mail size={20} />
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="hero-media-wrapper"
                initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                style={{ width: "100%", height: "100%" }}
              >
                <div className="hero-glow-bg"></div>
                <div className="hero-image-container" id="profile-image-container" style={{ padding: "0", cursor: "crosshair" }}>
                  <NeuralNetworkCanvas />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ background: "var(--bg-secondary)", borderTop: "1px solid rgba(212, 175, 55, 0.04)" }}>
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Introduction</span>
              <h2 className="section-main-title">Professional Vision</h2>
            </div>

            <div className="about-grid">
              {/* Card 1: Profile Spotlight Frame */}
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="about-profile-card">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                    <div className="profile-avatar-frame" id="about-avatar-frame">
                      {imageError ? (
                        <div style={{
                          width: "100%",
                          height: "100%",
                          background: "rgba(212, 175, 55, 0.05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent-gold-light)"
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "65px", height: "65px", filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))" }}>
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      ) : (
                        <Image
                          src={profileImg}
                          alt="Kinjal Rathod Profile"
                          fill
                          sizes="170px"
                          onError={() => setImageError(true)}
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <h3 style={{ fontSize: "1.45rem", marginBottom: "6px" }} className="gold-gradient-text">Kinjal Rathod</h3>
                    <p style={{ color: "var(--accent-gold-light)", fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>AI & ML Specialist</p>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", textAlign: "left", fontSize: "0.92rem", color: "var(--text-secondary)", margin: "16px 0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "6px" }}>
                        <span>Domain:</span>
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Autonomous Systems</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "6px" }}>
                        <span>Coordinates:</span>
                        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Gandhinagar, IN</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "4px" }}>
                        <span>Status:</span>
                        <span style={{ color: "var(--accent-gold-light)", fontWeight: 600 }}>Active Intern</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                    <a href="https://github.com/kinjalr7" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{ width: "36px", height: "36px" }}>
                      <GithubIcon size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/kinjalrathod2908/" target="_blank" rel="noopener noreferrer" className="footer-social-link" style={{ width: "36px", height: "36px" }}>
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Educational Matrix */}
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div className="achievement-icon-box">
                    <GraduationCap size={24} />
                  </div>
                  <h3>Educational Matrix</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <h4 style={{ color: "var(--accent-gold-light)" }}>B.E. in Information Technology</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "6px" }}>LDRP Institute of Technology and Research, Gandhinagar</p>
                    <p style={{ fontSize: "0.98rem" }}>
                      CGPA: <strong style={{ color: "var(--text-primary)" }}>8.27 / 10</strong> (Till 7th Semester) • Aug 2022 – May 2026
                    </p>
                    <div style={{ marginTop: "16px" }}>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "8px" }}>Core Curricular Subjects:</p>
                      <div className="project-tech" style={{ gap: "6px" }}>
                        {["Cyber Security", "OOP", "DBMS", "DSA", "Operating Systems", "Machine Learning", "Soft-Computing", "AI", "Computer Networks"].map((course, idx) => (
                          <span key={idx} className="project-tech-tag" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "20px" }}>
                    <h4 style={{ color: "var(--accent-gold)" }}>12th Grade - Science Pathway</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Government High Secondary School • 2021 – 2022</p>
                    <p style={{ fontSize: "0.98rem" }}>Percentage Score: <strong style={{ color: "var(--text-primary)" }}>60%</strong></p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <div className="achievement-icon-box">
                      <Sparkles size={24} />
                    </div>
                    <h3>Who I Am</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.02rem" }}>
                    As an IT student with a strong specialization in Artificial Intelligence and Machine Learning, I look at computing through the lens of automation. 
                    I build programs that connect data, compute, and reasoning to resolve real-world complications.
                  </p>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.02rem" }}>
                    My journey bridges data analysis, complex backend microservices, and AI Agent loops that execute tasks autonomously. 
                    Whether optimizing retrieval speed using vector indexing or predicting financial stock directions, I focus on precision.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.75rem", color: "var(--accent-gold-light)" }} className="gold-glow-text">10+</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>AI Libraries Handled</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.75rem", color: "var(--accent-gold-light)" }} className="gold-glow-text">8.27</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Cumulative BE Grade</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Skills Matrix</span>
              <h2 className="section-main-title">Interactive Capabilities</h2>
            </div>

            {/* Premium Interactive Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "48px",
                flexWrap: "wrap"
              }}
            >
              {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((key) => (
                <button
                  key={key}
                  id={`skill-tab-${key}`}
                  onClick={() => setActiveSkillCategory(key)}
                  style={{
                    padding: "12px 28px",
                    borderRadius: "30px",
                    border: "1px solid",
                    borderColor: activeSkillCategory === key ? "var(--accent-gold)" : "rgba(255, 255, 255, 0.04)",
                    background: activeSkillCategory === key ? "rgba(212, 175, 55, 0.12)" : "rgba(18, 18, 18, 0.45)",
                    color: activeSkillCategory === key ? "var(--accent-gold-light)" : "var(--text-secondary)",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.98rem",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  {key === "ai" && <Brain size={16} />}
                  {key === "ml" && <Cpu size={16} />}
                  {key === "web" && <Terminal size={16} />}
                  {key === "tools" && <Database size={16} />}
                  {skillCategories[key].title}
                </button>
              ))}
            </div>

            {/* Skill Showcase Card with mousemove dynamic borders */}
            <motion.div
              key={activeSkillCategory}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
              className="glass-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ maxWidth: "850px", margin: "0 auto", padding: "48px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div className="achievement-icon-box" style={{ background: "rgba(212, 175, 55, 0.15)" }}>
                  {skillCategories[activeSkillCategory].icon}
                </div>
                <h3>{skillCategories[activeSkillCategory].title} Specialties</h3>
              </div>

              <div className="skill-tags">
                {skillCategories[activeSkillCategory].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-tag"
                    style={{ fontSize: "1.05rem", padding: "10px 22px" }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" style={{ background: "var(--bg-secondary)", borderTop: "1px solid rgba(212, 175, 55, 0.04)" }}>
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Chronology</span>
              <h2 className="section-main-title">Professional Internships</h2>
            </div>

            {/* Timeline element mapping progress */}
            <div className="timeline" ref={timelineRef}>
              <motion.div
                className="timeline-progress-bar"
                style={{ height: "100%", scaleY, originY: 0 }}
              />

              {/* Internship 1 */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="timeline-dot" id="dot-internship-1"></div>
                <div 
                  className="glass-card" 
                  style={{ padding: "32px" }}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role" style={{ color: "var(--accent-gold-light)" }}>AI/ML Engineering Intern</h3>
                      <p className="timeline-company">The Special Character (On Site)</p>
                    </div>
                    <span className="timeline-date">Mar 2026 – Present</span>
                  </div>
                  <ul className="timeline-desc">
                    <li>
                      Architected and constructed a highly fast, custom <strong>RAG-based document retrieval engine</strong> by employing <strong>LangChain</strong> workflows.
                    </li>
                    <li>
                      Utilized <strong>PostgreSQL with pgvector</strong> extensions as a similarity search index, accelerating document processing compared to traditional exact match lookups.
                    </li>
                    <li>
                      Analyzed prompt-engineering techniques to establish highly secure contextual guardrails, maintaining accurate document-grounded responses.
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Internship 2 */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="timeline-dot" id="dot-internship-2"></div>
                <div 
                  className="glass-card" 
                  style={{ padding: "32px" }}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role" style={{ color: "var(--accent-gold-light)" }}>Python Software Developer</h3>
                      <p className="timeline-company">Asence Pharma Private Limited (On Site)</p>
                    </div>
                    <span className="timeline-date">Jan 2026 – Feb 2026</span>
                  </div>
                  <ul className="timeline-desc">
                    <li>
                      Consolidated foundational coding practices and OOP methodologies through real-world enterprise tasks and datasets.
                    </li>
                    <li>
                      Analyzed and refined industrial drug research logs, presenting data structures and profiles using <strong>Seaborn</strong>, NumPy, and Matplotlib.
                    </li>
                    <li>
                      Automated high-volume drug metadata ingestion pipelines, removing manual database entries.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Portfolio</span>
              <h2 className="section-main-title">Selected AI & Web Systems</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-card project-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="project-header">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div className="achievement-icon-box" style={{ width: "38px", height: "38px", borderRadius: "10px" }}>
                        {project.id === "nexus" && <Layers size={16} />}
                        {project.id === "seo-improve" && <Sparkles size={16} />}
                        {project.id === "analytics-dashboard" && <Terminal size={16} />}
                        {project.id === "smartin" && <Brain size={16} />}
                      </div>
                      <div>
                        <h3 className="project-title" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{project.title}</h3>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="project-desc">{project.summary}</p>

                  <div className="project-tech" style={{ marginBottom: "24px" }}>
                    {project.tech.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="project-tech-tag" style={{ background: "rgba(255,255,255,0.03)" }}>
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  <button
                    className="gold-btn-outline"
                    id={`view-details-${project.id}`}
                    style={{ width: "100%", padding: "10px", fontSize: "0.85rem", cursor: "pointer" }}
                    onClick={() => setSelectedProject(project)}
                  >
                    Deconstruct Architecture <ExternalLink size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project details overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(2, 2, 2, 0.85)",
                backdropFilter: "blur(24px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1100,
                padding: "24px"
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.92, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.92, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 350 }}
                className="glass-card"
                style={{
                  maxWidth: "780px",
                  width: "100%",
                  maxHeight: "85vh",
                  overflowY: "auto",
                  border: "1px solid rgba(212, 175, 55, 0.35)",
                  boxShadow: "0 25px 60px rgba(212, 175, 55, 0.2)",
                  position: "relative"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    background: "rgba(18,18,18,0.7)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    cursor: "pointer"
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div className="achievement-icon-box">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--accent-gold-light)", fontWeight: 600 }}>
                      {selectedProject.subtitle}
                    </span>
                    <h2 style={{ fontSize: "1.85rem", margin: 0 }} className="gold-gradient-text">{selectedProject.title}</h2>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
                  <div>
                    <h4 style={{ color: "var(--accent-gold-light)", marginBottom: "6px" }}>Engineering Role</h4>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.98rem" }}>{selectedProject.role}</p>
                  </div>

                  <div>
                    <h4 style={{ color: "var(--accent-gold-light)", marginBottom: "6px" }}>Technical Architecture</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.6 }}>{selectedProject.architecture}</p>
                  </div>

                  <div>
                    <h4 style={{ color: "var(--accent-gold-light)", marginBottom: "10px" }}>Key Accomplishments</h4>
                    <ul style={{ listStyleType: "none", color: "var(--text-secondary)", fontSize: "0.98rem" }}>
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ position: "relative", paddingLeft: "22px", marginBottom: "10px", lineHeight: 1.5 }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--accent-gold-light)" }}>✦</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: "var(--accent-gold-light)", marginBottom: "10px" }}>Integrated Stack</h4>
                    <div className="project-tech">
                      {selectedProject.tech.map((tech, idx) => (
                        <span key={idx} className="project-tech-tag" style={{ background: "rgba(212, 175, 55, 0.08)" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievements Section */}
        <section id="achievements" style={{ background: "var(--bg-secondary)", borderTop: "1px solid rgba(212, 175, 55, 0.04)" }}>
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Credentials</span>
              <h2 className="section-main-title">Professional Certification</h2>
            </div>

            <div className="achievements-grid">
              {/* Achievement 1 */}
              <motion.div
                className="glass-card achievement-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="achievement-icon-box">
                  <Award size={26} />
                </div>
                <div className="achievement-details">
                  <h4>Python for Data Science</h4>
                  <p>Issued by NPTEL Certification Board</p>
                </div>
              </motion.div>

              {/* Achievement 2 */}
              <motion.div
                className="glass-card achievement-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="achievement-icon-box">
                  <Cpu size={26} />
                </div>
                <div className="achievement-details">
                  <h4>Data Analyst Job Simulate</h4>
                  <p>Deloitte Certified Finalist Portfolio</p>
                </div>
              </motion.div>

              {/* Achievement 3 */}
              <motion.div
                className="glass-card achievement-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="achievement-icon-box">
                  <Terminal size={26} />
                </div>
                <div className="achievement-details">
                  <h4>Cybersecurity Job Simulate</h4>
                  <p>Forage Certified Finalist Portfolio</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Connect</span>
              <h2 className="section-main-title">Initiate Collaboration</h2>
            </div>

            <div className="contact-grid">
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "16px" }}>Direct Coordinates</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.6 }}>
                    Feel free to reach out directly via mail or telephone. Let's build something state-of-the-art together.
                  </p>

                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="contact-icon-wrapper">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="contact-detail-label">Write Email</p>
                        <a href="mailto:kinjalrathodmr@gmail.com" className="contact-detail-value" id="direct-email-link">
                          kinjalrathodmr@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon-wrapper">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="contact-detail-label">Direct Line</p>
                        <a href="tel:7203855029" className="contact-detail-value" id="direct-phone-link">
                          +91 72038 55029
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "24px", marginTop: "32px" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--accent-gold-light)", marginBottom: "12px" }}>Follow Coordinates</h4>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a
                      href="https://github.com/kinjalr7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      id="contact-github-social"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kinjalrathod2908/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      id="contact-linkedin-social"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <form className="contact-form" onSubmit={handleContactSubmit} id="contact-form-element">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name-input">Ident Name</label>
                      <input
                        type="text"
                        id="name-input"
                        className="form-input"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email-input">Digital Address</label>
                      <input
                        type="email"
                        id="email-input"
                        className="form-input"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject-input">Subject Topic</label>
                    <input
                      type="text"
                      id="subject-input"
                      className="form-input"
                      placeholder="Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", flexWrap: "wrap", gap: "6px" }}>
                      <label htmlFor="message-input" style={{ marginBottom: 0 }}>Message Content</label>
                      <span style={{ fontSize: "0.78rem", color: "var(--accent-gold-light)", fontWeight: 600, letterSpacing: "0.02em" }}>Quick Formatter Templates:</span>
                    </div>

                    {/* High-End Quick Template Selectors */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
                      {[
                        {
                          label: "🤝 Collaboration",
                          subject: "Collaboration Opportunity",
                          body: "Hi Kinjal,\n\nI came across your portfolio and was highly impressed by your expertise in AI Agentic Systems and RAG architectures. I would love to connect and discuss a potential collaboration or custom project.\n\nBest regards,\n[Your Name]"
                        },
                        {
                          label: "💼 Hire Opportunity",
                          subject: "Job / Project Inquiry",
                          body: "Hi Kinjal,\n\nI am reaching out regarding an exciting professional opportunity. We are seeking an AI/ML specialist with your skills in LangChain, vector similarity indexing, and quantitative models. I'd love to schedule a brief call.\n\nBest regards,\n[Your Name]"
                        },
                        {
                          label: "❓ General Inquiry",
                          subject: "General Inquiry / Discussion",
                          body: "Hi Kinjal,\n\nI had a quick question regarding some of the technical architectures showcased on your website (such as Nexus or SEO-Improve). I'd love to connect to discuss details!\n\nBest regards,\n[Your Name]"
                        }
                      ].map((tmpl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="template-quick-btn"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              subject: tmpl.subject,
                              message: tmpl.body
                            });
                          }}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "16px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            background: "rgba(212, 175, 55, 0.04)",
                            color: "var(--text-secondary)",
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            fontFamily: "var(--font-display)"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(212, 175, 55, 0.12)";
                            e.currentTarget.style.color = "var(--accent-gold-light)";
                            e.currentTarget.style.borderColor = "var(--accent-gold)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(212, 175, 55, 0.04)";
                            e.currentTarget.style.color = "var(--text-secondary)";
                            e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          {tmpl.label}
                        </button>
                      ))}
                    </div>

                    <textarea
                      id="message-input"
                      className="form-textarea"
                      placeholder="Hi Kinjal, I would like to discuss..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="gold-btn" id="submit-contact-form" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? (
                      <>Processing Ingest...</>
                    ) : (
                      <>
                        Transmit Message <Send size={16} />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="form-status success"
                        id="form-success-toast"
                      >
                        <CheckCircle2 size={16} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }} />
                        Transmission Successful! Message has been routed. Kinjal will reach out shortly.
                      </motion.div>
                    )}
                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="form-status error"
                        id="form-error-toast"
                      >
                        Failed Ingest. Please verify required fields and try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gold-gradient-text gold-glow-text">KINJAL RATHOD</span>
          </div>
          <div className="footer-socials">
            <a
              href="https://github.com/kinjalr7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-github"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kinjalrathod2908/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-linkedin"
            >
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:kinjalrathodmr@gmail.com" className="footer-social-link" id="footer-email">
              <Mail size={18} />
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Kinjal Rathod. Built using Next.js & Vanilla CSS with high-contrast golden systems.
          </p>
        </div>
      </footer>
    </>
  );
}
