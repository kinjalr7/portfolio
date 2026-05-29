"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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

// Interactive 3D Holographic AI Neural Network Constellation Sphere for AI/ML Theme
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

    // 3D Point Class for dynamic lattice
    class Node3D {
      x: number; // local coordinates on unit sphere
      y: number;
      z: number;

      // Floating wave animation noise offsets
      noiseOffsetX: number;
      noiseOffsetY: number;
      noiseOffsetZ: number;
      noiseSpeed: number;

      constructor(index: number, total: number) {
        // Distribute points evenly on a 3D sphere using the golden ratio Fibonacci spiral method
        const phi = Math.acos(1 - 2 * (index + 0.5) / total);
        const theta = Math.PI * (1 + 5 ** 0.5) * index;

        const radius = 145; // Base radius of the holographic sphere
        this.x = radius * Math.sin(phi) * Math.cos(theta);
        this.y = radius * Math.sin(phi) * Math.sin(theta);
        this.z = radius * Math.cos(phi);

        this.noiseOffsetX = Math.random() * 100;
        this.noiseOffsetY = Math.random() * 100;
        this.noiseOffsetZ = Math.random() * 100;
        this.noiseSpeed = 0.008 + Math.random() * 0.012;
      }
    }

    const nodeCount = 70;
    const nodes: Node3D[] = Array.from({ length: nodeCount }, (_, i) => new Node3D(i, nodeCount));

    // Electrical signal pulses traveling through connections
    interface Signal {
      from: number;
      to: number;
      progress: number;
      speed: number;
    }

    let activeSignals: Signal[] = [];
    const maxSignals = 6;

    // Calculate dynamic 3D connections based on spatial proximity
    const getConnections = (i: number) => {
      const connections: number[] = [];
      const n1 = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const n2 = nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dz = n1.z - n2.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // Link nodes that are close to one another in physical 3D space
        if (dist < 115) {
          connections.push(j);
        }
      }
      return connections;
    };

    // Precalculate adjacent connections mapping for signal routes
    const adjList: number[][] = [];
    for (let i = 0; i < nodes.length; i++) {
      adjList.push(getConnections(i));
    }

    // Initialize initial active signals
    for (let i = 0; i < maxSignals; i++) {
      const fromNode = Math.floor(Math.random() * nodes.length);
      const possibleDest = adjList[fromNode];
      if (possibleDest && possibleDest.length > 0) {
        const toNode = possibleDest[Math.floor(Math.random() * possibleDest.length)];
        activeSignals.push({
          from: fromNode,
          to: toNode,
          progress: Math.random(),
          speed: 0.007 + Math.random() * 0.012
        });
      }
    }

    // Camera 3D angles in radians
    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;

    // Rotational velocities
    let rotSpeedX = 0.002;
    let rotSpeedY = 0.0025;

    let mouseX: number | null = null;
    let mouseY: number | null = null;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
      isMouseOver = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Interactive Mouse Displacement Gravity
      if (isMouseOver && mouseX !== null && mouseY !== null) {
        // Sphere tilts dynamically to track the pointer relative to the core center
        const targetSpeedY = ((mouseX - width / 2) / (width / 2)) * 0.014;
        const targetSpeedX = -((mouseY - height / 2) / (height / 2)) * 0.014;

        // Smooth interpolation dampening
        rotSpeedY += (targetSpeedY - rotSpeedY) * 0.07;
        rotSpeedX += (targetSpeedX - rotSpeedX) * 0.07;
      } else {
        // Smoothly return to continuous organic floating spin speed
        rotSpeedY += (0.0022 - rotSpeedY) * 0.03;
        rotSpeedX += (0.0012 - rotSpeedX) * 0.03;
      }

      rotY += rotSpeedY;
      rotX += rotSpeedX;
      rotZ += 0.0006; // continuous Z roll

      // 3D Perspective Projection parameter
      const fov = 350;

      // Cache trigonometric values
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      // Projected coordinates array
      interface ProjectedNode {
        x: number;
        y: number;
        z: number;
        scale: number;
        originalIndex: number;
      }

      const projected: ProjectedNode[] = [];

      // 2. Rotate and project each node with 3D camera equations
      nodes.forEach((node, index) => {
        // Add low-frequency wave noise mapping for organic floating motion
        node.noiseOffsetX += node.noiseSpeed;
        node.noiseOffsetY += node.noiseSpeed;
        node.noiseOffsetZ += node.noiseSpeed;

        const nx = node.x + Math.sin(node.noiseOffsetX) * 9;
        const ny = node.y + Math.cos(node.noiseOffsetY) * 9;
        const nz = node.z + Math.sin(node.noiseOffsetZ) * 9;

        // Rotate on Y-axis
        let x1 = nx * cosY - nz * sinY;
        let z1 = nx * sinY + nz * cosY;

        // Rotate on X-axis
        let y2 = ny * cosX - z1 * sinX;
        let z2 = ny * sinX + z1 * cosX;

        // Rotate on Z-axis
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        // 3D Perspective Projection
        const scale = fov / (fov + z2);
        const projX = width / 2 + x3 * scale;
        const projY = height / 2 + y3 * scale;

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale: scale,
          originalIndex: index
        });
      });

      // 3. Render Synapses (Lines) - Fading based on Euclidean proximity & Z-depth
      ctx.lineWidth = 0.95;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        const dests = adjList[p1.originalIndex];

        if (!dests) continue;

        dests.forEach((destIdx) => {
          // Avoid double rendering links
          if (p1.originalIndex > destIdx) return;

          const p2 = projected[destIdx];

          const n1 = nodes[p1.originalIndex];
          const n2 = nodes[destIdx];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 120) {
            // Distance fading calculation
            let alpha = 1 - dist3D / 120;

            // Fading back nodes for realistic depth of field
            const meanZ = (p1.z + p2.z) / 2;
            const depthFactor = Math.max(0.18, Math.min(1.0, 1 - (meanZ + 145) / 290));
            alpha *= depthFactor * 0.44;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.stroke();
          }
        });
      }

      // 4. Update and Render Action Potential Electrical Signals
      activeSignals.forEach((sig) => {
        sig.progress += sig.speed;

        // At link destination, route signal along a new connected path
        if (sig.progress >= 1.0) {
          sig.progress = 0;
          sig.from = sig.to;
          const possibles = adjList[sig.from];
          if (possibles && possibles.length > 0) {
            sig.to = possibles[Math.floor(Math.random() * possibles.length)];
          } else {
            sig.from = Math.floor(Math.random() * nodes.length);
            const fallbackPossibles = adjList[sig.from];
            sig.to = fallbackPossibles && fallbackPossibles.length > 0
              ? fallbackPossibles[Math.floor(Math.random() * fallbackPossibles.length)]
              : Math.floor(Math.random() * nodes.length);
          }
          sig.speed = 0.007 + Math.random() * 0.012;
        }

        const pFrom = projected[sig.from];
        const pTo = projected[sig.to];

        if (pFrom && pTo) {
          const sigX = pFrom.x + (pTo.x - pFrom.x) * sig.progress;
          const sigY = pFrom.y + (pTo.y - pFrom.y) * sig.progress;
          const sigZ = pFrom.z + (pTo.z - pFrom.z) * sig.progress;

          const scale = fov / (fov + sigZ);
          const radius = Math.max(1.8, 3.5 * scale);
          const alpha = Math.max(0.2, Math.min(1.0, 1 - (sigZ + 145) / 290));

          // Render glowing pulse node
          ctx.beginPath();
          ctx.arc(sigX, sigY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 235, 150, ${alpha * 0.98})`;
          ctx.shadowColor = "rgba(255, 215, 0, 0.9)";
          ctx.shadowBlur = Math.max(6, 14 * scale);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 5. Render Node Particles (Depth sorted: back particles are rendered first!)
      const sortedProjected = [...projected].sort((a, b) => b.z - a.z);

      sortedProjected.forEach((p) => {
        const radius = Math.max(1.2, (2.6 + Math.sin(p.z * 0.015) * 0.8) * p.scale);
        const zFactor = (p.z + 145) / 290; // 0 (front) to 1 (back) range
        const alpha = Math.max(0.18, Math.min(0.95, 1 - zFactor));

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

        if (zFactor < 0.3) {
          // Foreground particles: Golden center with ambient glowing shadows
          ctx.fillStyle = `rgba(255, 235, 150, ${alpha})`;
          ctx.shadowColor = "rgba(212, 175, 55, 0.95)";
          ctx.shadowBlur = 9 * p.scale;
        } else {
          // Background particles: Faded dark golden elements
          ctx.fillStyle = `rgba(212, 175, 55, ${alpha * 0.82})`;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset shadows
      });

      // 6. Draw glowing core energy well in the absolute center
      const coreZ = 0;
      const coreScale = fov / (fov + coreZ);
      const coreX = width / 2;
      const coreY = height / 2;

      const pulseRadius = (18 + Math.sin(Date.now() * 0.0016) * 4) * coreScale;
      const gradient = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, pulseRadius);
      gradient.addColorStop(0, "rgba(255, 235, 150, 0.28)");
      gradient.addColorStop(0.3, "rgba(212, 175, 55, 0.12)");
      gradient.addColorStop(1, "rgba(212, 175, 55, 0)");

      ctx.beginPath();
      ctx.arc(coreX, coreY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

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

// Floating Dock Interface for skills category navigation
interface DockItem {
  id: "ai" | "ml" | "web" | "tools";
  title: string;
  icon: React.ReactNode;
}

const FloatingSkillsDock = ({
  activeCategory,
  setActiveCategory,
  categories
}: {
  activeCategory: "ai" | "ml" | "web" | "tools";
  setActiveCategory: (cat: "ai" | "ml" | "web" | "tools") => void;
  categories: DockItem[];
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "16px",
          padding: "12px 24px",
          borderRadius: "26px",
          background: "rgba(10, 10, 10, 0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(212, 175, 55, 0.16)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          maxWidth: "fit-content",
          height: "82px",
          margin: "0 auto 48px auto"
        }}
      >
        {categories.map((item) => (
          <DockIcon
            key={item.id}
            mouseX={mouseX}
            item={item}
            isActive={activeCategory === item.id}
            onClick={() => setActiveCategory(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
};

const DockIcon = ({
  mouseX,
  item,
  isActive,
  onClick
}: {
  mouseX: any;
  item: DockItem;
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    const center = bounds.x + bounds.width / 2;
    return val - center;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);

  const widthSpring = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightSpring = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(3, 3, 3, 0.95)",
              border: "1px solid var(--accent-gold-dark)",
              color: "var(--accent-gold-light)",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "0.78rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.15)",
              zIndex: 50
            }}
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: widthSpring,
          height: heightSpring,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          border: "1px solid",
          borderColor: isActive ? "var(--accent-gold)" : "rgba(255, 255, 255, 0.06)",
          background: isActive ? "rgba(212, 175, 55, 0.16)" : "rgba(20, 20, 20, 0.75)",
          color: isActive ? "var(--accent-gold-light)" : "var(--text-secondary)",
          transition: "border-color 0.25s, background-color 0.25s, box-shadow 0.25s",
          boxShadow: isActive ? "0 0 20px rgba(212, 175, 55, 0.25)" : "none",
          padding: 0
        }}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          animate={{ scale: isActive ? 1.15 : 1 }}
        >
          {item.icon}
        </motion.div>
      </motion.button>
    </div>
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
  src: string;
  github: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "AI & ML" | "System Architecture" | "Algorithms";
  date: string;
  readingTime: string;
  projectId: string;
  content: string;
}

const blogs: BlogPost[] = [
  {
    id: "nexus-forecasting",
    title: "Predicting the Market: A Comparative Analysis of ARIMA, Prophet, and LSTM Networks",
    excerpt: "An in-depth exploration of statistical and deep learning approaches to time-series stock analytics, mapping trade-offs in data efficiency, convergence speeds, and predictive variance.",
    category: "AI & ML",
    date: "May 25, 2026",
    readingTime: "7 min read",
    projectId: "nexus",
    content: `
      <h3>Introduction to Financial Time-Series Forecasting</h3>
      <p>Financial time-series forecasting represents one of the most challenging domains in predictive analytics due to high volatility, non-stationarity, and low signal-to-noise ratios. In building <strong>Nexus</strong>, we engineered a benchmarking pipeline comparing three distinct mathematical approaches: classical statistical models (ARIMA), additive regression models (Prophet), and deep sequence learning models (Long Short-Term Memory, or LSTM).</p>
      
      <h3>The Classical Approach: ARIMA</h3>
      <p>The AutoRegressive Integrated Moving Average model combines three components:</p>
      <ul>
        <li><strong>Autoregression (p):</strong> Utilizing the dependency relationship between an observation and a number of lagged observations.</li>
        <li><strong>Integration (d):</strong> Differencing raw observations to make the time series stationary.</li>
        <li><strong>Moving Average (q):</strong> Modeling the dependency between an observation and a residual error from a moving average model applied to lagged observations.</li>
      </ul>
      <p>While ARIMA excels at short-term, stationary series, it struggles with complex multi-seasonal patterns and non-linear shifts typical of long-term market trends.</p>

      <h3>Additive Regression: Prophet</h3>
      <p>Developed by Meta, Prophet models time series using an additive framework with three main components: trend, seasonality, and holidays. It is formulated as:</p>
      <pre><code>y(t) = g(t) + s(t) + h(t) + ε_t</code></pre>
      <p>Where <code>g(t)</code> represents the non-periodic trend, <code>s(t)</code> represents periodic changes (e.g., weekly/yearly seasonality), <code>h(t)</code> captures holiday effects, and <code>ε_t</code> represents normal-distributed errors. Prophet is incredibly robust to missing data, shift trends, and large outliers.</p>

      <h3>Deep Sequence Learning: LSTM Networks</h3>
      <p>LSTMs are a specialized type of Recurrent Neural Network (RNN) designed to learn long-term dependencies. They mitigate the vanishing gradient problem using a cell state regulated by three gates:</p>
      <pre><code>// LSTM Gate Mechanics
f_t = σ(W_f · [h_{t-1}, x_t] + b_f)  // Forget Gate
i_t = σ(W_i · [h_{t-1}, x_t] + b_i)  // Input Gate
o_t = σ(W_o · [h_{t-1}, x_t] + b_o)  // Output Gate</code></pre>
      <p>LSTMs process sequence sequences by retaining memory across thousands of time steps, allowing them to capture non-linear, multi-dimensional patterns that traditional statistical models overlook completely.</p>

      <h3>Comparative Metrics & Benchmarks</h3>
      <p>In our Nexus test runs, models were trained on historical stock coordinates and validated against unseen split datasets. Here are our findings:</p>
      <ul>
        <li><strong>ARIMA (2,1,2):</strong> Extremely low compute cost, excellent short-term (1-3 days) predictive accuracy, but rapid variance expansion as the forecast window extended.</li>
        <li><strong>Prophet:</strong> Highly intuitive tuning parameters (e.g., changing change-point prior scales), handles seasonality effortlessly, and provides stable, interpretable trendlines.</li>
        <li><strong>LSTM:</strong> Outstanding capability to fit complex, multi-day non-linear trajectories, but requires substantial data normalization (MinMax scaling) and is prone to overfitting if not highly regularized via dropout layers.</li>
      </ul>

      <h3>Implementation Snippet</h3>
      <p>Here is a snippet of the recurrent LSTM architecture built in Python using Keras/TensorFlow:</p>
      <pre><code>from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

def build_forecasting_lstm(input_shape):
    model = Sequential([
        LSTM(units=64, return_sequences=True, input_shape=input_shape),
        Dropout(0.2),
        LSTM(units=32, return_sequences=False),
        Dropout(0.2),
        Dense(units=16, activation='relu'),
        Dense(units=1)  # Predicted price value
    ])
    model.compile(optimizer='adam', loss='mean_squared_error')
    return model</code></pre>

      <h3>Conclusion</h3>
      <p>A hybrid forecasting engine leveraging ARIMA's short-term precision alongside LSTM's long-term non-linear pattern extraction provides the ultimate edge in algorithmic time-series analytics.</p>
    `
  },
  {
    id: "hermes-agent-patterns",
    title: "Building Autonomous Agents: Design Patterns in the Hermes SEO Framework",
    excerpt: "How event-driven pipelines, self-reflection loops, and structured multi-agent routing engines enable resilient SEO automation with zero human touchpoints.",
    category: "System Architecture",
    date: "May 18, 2026",
    readingTime: "9 min read",
    projectId: "seo-improve",
    content: `
      <h3>The Paradigm of Autonomous AI Agents</h3>
      <p>Autonomous agents are software entities that perceive their environment, make decisions using reasoning engines (LLMs), and execute actions using external toolsets. In building <strong>SEO-Improve (Hermes Agent)</strong>, the primary engineering challenge was moving beyond simple single-prompt text generation and implementing a multi-agent system capable of recursively auditing, validating, and committing code changes autonomously.</p>

      <h3>The Self-Reflection Loop</h3>
      <p>LLMs are prone to hallucinating and generating malformed syntaxes. To guarantee system-level safety in a self-governing codebase environment, we implemented the <strong>Reflective Agent Pattern</strong>. Instead of executing LLM outputs directly, the pipeline routes outputs to a secondary validation agent whose sole purpose is to audit and find flaws. This event loop acts as a critical quality assurance filter:</p>
      <pre><code>[Input Goal] -> [Planner Agent] -> [Executor Agent]
                        ^                 |
                        |                 v
                 [Retry/Refine] <- [Validator Agent] (Pass/Fail)
                                          | (Pass)
                                          v
                                   [Execute Tool/Git Commit]</code></pre>

      <h3>Structured Output and JSON Schema Enforcement</h3>
      <p>To enable LLM decisions to reliably trigger programmatic workflows, we enforce structured outputs using JSON schemas. Rather than raw chat text, the agent is constrained to respond in strict JSON matching a schema for file manipulations, site auditing, or metadata enhancements. Here is the structured schema structure for file replacement tools:</p>
      <pre><code>{
  "type": "object",
  "properties": {
    "targetFile": { "type": "string" },
    "instructions": { "type": "string" },
    "replacements": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "targetContent": { "type": "string" },
          "replacementContent": { "type": "string" }
        },
        "required": ["targetContent", "replacementContent"]
      }
    }
  },
  "required": ["targetFile", "instructions", "replacements"]
}</code></pre>

      <h3>Event-Driven Multi-Agent Collaboration</h3>
      <p>The Hermes Framework divides the workload among multiple collaborative, isolated sub-agents:</p>
      <ul>
        <li><strong>Auditor Agent:</strong> Scrapes the live DOM, measures SEO rankings, identifies broken metadata, and highlights poor heading structures.</li>
        <li><strong>Copywriter Agent:</strong> Rewrites title tags, meta descriptions, and alt tags following modern search algorithms and NLP readability benchmarks.</li>
        <li><strong>Git Agent:</strong> Spawns separate feature branches, validates code syntaxes, replaces target lines, commits diffs, and opens automated GitHub PRs.</li>
      </ul>

      <h3>Python Validation Implementation</h3>
      <p>Here is an example code snippet demonstrating how the Validator Agent validates an LLM generated JSON output against standard rules before deploying modifications:</p>
      <pre><code>import json
import jsonschema
from jsonschema import validate

def validate_agent_action(raw_json_output, schema):
    try:
        data = json.loads(raw_json_output)
        validate(instance=data, schema=schema)
        
        # Additional semantic validation
        for chunk in data.get("replacements", []):
            if not chunk["targetContent"].strip():
                return False, "Target content must not be blank."
                
        return True, data
    except json.JSONDecodeError:
        return False, "Malformed JSON syntax string."
    except jsonschema.ValidationError as err:
        return False, f"JSON fails schema validation: {err.message}"</code></pre>

      <h3>Key Takeaways</h3>
      <p>By shifting from basic generative prompts to state-persisted, event-driven multi-agent pipelines with automated validation filters, developers can create AI agents capable of carrying out complex technical assignments with absolute reliability.</p>
    `
  },
  {
    id: "high-throughput-scrapers",
    title: "High-Throughput Scrapers: Handling API Rate Limits & Concurrency in Social Data Engines",
    excerpt: "Analyzing distributed throttling bottlenecks, resilient sliding-window limiters, and exponential backoff strategies inside high-volume social media scrapers.",
    category: "Algorithms",
    date: "May 10, 2026",
    readingTime: "6 min read",
    projectId: "social-analytics",
    content: `
      <h3>The Challenge of Modern Web Scraping</h3>
      <p>When aggregating and analyzing engagement metrics across multiple social platforms (e.g., GitHub, Twitter, LinkedIn), rate-limiting and connection throttling are primary architectural challenges. For the <strong>Hermes Social Analytics</strong> platform, we designed a high-throughput scraping queue capable of dynamically adapting to API rate limits while sustaining high concurrent volumes.</p>

      <h3>Rate Limiting Algorithms</h3>
      <p>API servers enforce rate limits using several standard algorithms to prevent resource exhaustion:</p>
      <ul>
        <li><strong>Token Bucket:</strong> A bucket holds up to a maximum number of tokens. Tokens are added back at a constant rate. Each API call consumes a token. If the bucket is empty, the call is rejected.</li>
        <li><strong>Leaky Bucket:</strong> Requests are placed in a queue and processed at a continuous, steady rate, smoothing out bursty traffic.</li>
        <li><strong>Sliding Window Log:</strong> The server tracks the timestamp of every request in a transactional log, rejecting calls if the sliding duration contains too many entries.</li>
      </ul>

      <h3>Resilience Design: Backoff and Jitter</h3>
      <p>When an API endpoint returns an HTTP Status <code>429 Too Many Requests</code>, naive systems retry immediately, worsening the rate-limit bottleneck. The correct response is implementing **Exponential Backoff** coupled with **Randomized Jitter**:</p>
      <pre><code>t_wait = min(t_max, t_base * (2 ^ attempt)) + Jitter</code></pre>
      <p>Jitter introduces random noise into the delay calculation. This prevents multiple concurrent threads from synchronizing their retry attempts (known as the *thundering herd problem*), smoothing out load coordinates on the server.</p>

      <h3>Concurrency Architecture in TypeScript</h3>
      <p>To maximize throughput, we orchestrate scraping tasks inside an asynchronous worker queue that limits concurrent execution and tracks active API keys. The queue enforces throttling boundaries using native TypeScript promises:</p>
      <pre><code>class ConcurrencyQueue {
  private activeWorkers = 0;
  private queue: (() => Promise<void>)[] = [];

  constructor(private maxConcurrency: number) {}

  public async enqueue&lt;T&gt;(task: () => Promise&lt;T&gt;): Promise&lt;T&gt; {
    return new Promise&lt;T&gt;((resolve, reject) => {
      const run = async () => {
        this.activeWorkers++;
        try {
          const result = await task();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          this.activeWorkers--;
          this.next();
        }
      };

      this.queue.push(run);
      this.next();
    });
  }

  private next() {
    if (this.activeWorkers < this.maxConcurrency && this.queue.length > 0) {
      const nextTask = this.queue.shift();
      if (nextTask) nextTask();
    }
  }
}</code></pre>

      <h3>API Token Rotation Layer</h3>
      <p>To bypass single-account throttling thresholds, we designed a credentials database that dynamically rotates API access tokens based on cooldown states. If a token encounters a 429 response, the system tags the token with a cooldown timestamp and routes subsequent requests through alternative, active tokens, ensuring uninterrupted data scraping pipelines.</p>

      <h3>Conclusion</h3>
      <p>High-throughput scraping requires an active combination of concurrent promise scheduling, backoff resilience, and token rotation layers. Designing systems to respect and adapt to rate limits ensures continuous, stable analytical flows.</p>
    `
  },
  {
    id: "edge-ai-offline-nlp",
    title: "Edge AI & Offline NLP: Compressing LLMs for Low-Latency Voice Assistants",
    excerpt: "Achieving real-time latency under 100ms by quantizing models, deploying GPU-accelerated local runtimes, and utilizing fast in-memory semantic caches.",
    category: "AI & ML",
    date: "May 02, 2026",
    readingTime: "8 min read",
    projectId: "smartin",
    content: `
      <h3>The Paradigm of Local Edge AI</h3>
      <p>Traditional AI voice assistants route audio inputs to cloud APIs, introducing latency bottlenecks and privacy vulnerabilities. For <strong>Smartin (AI Voice Companion)</strong>, the design goal was creating a fully local, zero-network NLP voice companion. This required compressing large neural networks to fit consumer-grade edge devices while achieving a round-trip speech-to-response latency under 100ms.</p>

      <h3>Quantization and Model Compression</h3>
      <p>Deep learning models represent parameters as 32-bit floating-point numbers (FP32). Model quantization compresses parameters by mapping floating-point numbers to lower-precision representations, such as 16-bit floats (FP16), 8-bit integers (INT8), or even 4-bit integers (INT4):</p>
      <pre><code>Parameter Size (7B Parameter Model):
• FP32 (uncompressed): ~28 GB VRAM
• FP16 (standard):      ~14 GB VRAM
• INT8 (quantized):     ~7 GB VRAM
• INT4 (highly compressed): ~3.8 GB VRAM</code></pre>
      <p>Using advanced quantization formats like <strong>GGUF</strong> and <strong>AWQ</strong>, we compressed our conversational models down to INT4 precision. This reduction allows 7-billion parameter LLMs to reside fully inside local GPU or NPU VRAM blocks, maintaining 95%+ of original conversational quality while speeding up inference cycles significantly.</p>

      <h3>High-Performance Local Runtimes</h3>
      <p>To run quantized models at maximum speeds, we utilized localized inference engines written in high-performance C/C++:</p>
      <ul>
        <li><strong>Llama.cpp:</strong> Offers bare-metal CPU/GPU acceleration, making it ideal for running compressed models on local hardware.</li>
        <li><strong>ONNX Runtime:</strong> Standardizes model cross-compilation, enabling GPU acceleration across discrete consumer architectures (CUDA, DirectML, Vulkan).</li>
      </ul>

      <h3>Audio Processing Pipeline</h3>
      <p>The audio pipeline consists of three core components:</p>
      <pre><code>[Voice Audio Input] -> [Whisper (Speech-to-Text)] -> [Local INT4 LLM]
                                                          |
                                                          v
                                               [Edge TTS (Text-to-Speech)]</code></pre>
      <p>Audio is continuously captured from the microphone in 16kHz chunks. A local, quantized Whisper model decodes speech patterns, feeding tokens to the compressed LLM. To achieve low latency, generation tokens are streamed directly to the text-to-speech engine (TTS) as they are produced, enabling audio responses to play back before the complete sentence is fully resolved.</p>

      <h3>In-Memory Semantic Caching</h3>
      <p>To instantly resolve repetitive user greetings or command variables, we implemented an in-memory vector cache using cosine similarity. If the vector representation of a user query matches an existing cached response by more than 92%, the local system returns the cached answer instantly, bypassing the LLM inference loop entirely and resolving requests in 2 milliseconds.</p>

      <h3>Conclusion</h3>
      <p>Edge AI unlocks highly private, zero-latency, and network-resilient conversational experiences. Through smart model quantization, accelerated runtimes, and local semantic caching, highly sophisticated voice companions can operate seamlessly on localized consumer hardware.</p>
    `
  }
];

// Interactive Miniature System Telemetry Dashboards for Bento grid layout
const StockChartTelemetry = () => (
  <div className="telemetry-box stock-telemetry">
    <svg viewBox="0 0 300 120" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
      {/* Grid Lines */}
      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(212, 175, 55, 0.06)" strokeWidth="1" />
      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(212, 175, 55, 0.06)" strokeWidth="1" />
      <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(212, 175, 55, 0.06)" strokeWidth="1" />
      <line x1="0" y1="110" x2="300" y2="110" stroke="rgba(212, 175, 55, 0.06)" strokeWidth="1" />

      {/* Historical Data path */}
      <path
        d="M 0,90 Q 30,110 60,80 T 120,70 T 180,85"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Diverging Forecast ARIMA (dotted) */}
      <path
        d="M 180,85 Q 210,105 240,110 T 300,115"
        stroke="rgba(212, 175, 55, 0.35)"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
        className="arima-path"
      />

      {/* Diverging Forecast Prophet (dashed) */}
      <path
        d="M 180,85 Q 210,75 240,60 T 300,45"
        stroke="rgba(255, 229, 127, 0.55)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        strokeLinecap="round"
        className="prophet-path"
      />

      {/* Diverging Forecast LSTM (solid gold glow) */}
      <path
        d="M 180,85 Q 210,65 240,40 T 300,25"
        stroke="var(--accent-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="lstm-path"
        style={{
          filter: "drop-shadow(0 0 5px rgba(212, 175, 55, 0.75))"
        }}
      />

      {/* Split/Forecast Point Indicator */}
      <circle cx="180" cy="85" r="4" fill="#030303" stroke="var(--accent-gold-light)" strokeWidth="2" />
      <circle cx="180" cy="85" r="8" stroke="var(--accent-gold)" strokeWidth="1" className="ping-dot" style={{ transformOrigin: "180px 85px" }} />

      {/* Active prediction tracking dot */}
      <circle cx="300" cy="25" r="3.5" fill="var(--accent-gold-light)" />

      {/* Dynamic forecast bounds envelope (shadow area) */}
      <path
        d="M 180,85 Q 210,65 240,40 T 300,25 L 300,115 T 240,110 Q 210,105 180,85 Z"
        fill="rgba(212, 175, 55, 0.015)"
      />
    </svg>

    {/* Micro labels */}
    <div className="telemetry-labels">
      <span className="tel-label arima">ARIMA</span>
      <span className="tel-label prophet">PROPHET</span>
      <span className="tel-label lstm">LSTM Model</span>
    </div>
  </div>
);

const AgentLoopTelemetry = () => (
  <div className="telemetry-box agent-telemetry">
    <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
      {/* Center Core Hub */}
      <circle cx="80" cy="80" r="16" fill="rgba(212, 175, 55, 0.02)" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="80" cy="80" r="4" fill="var(--accent-gold-light)" />

      {/* Loop Orbit Paths */}
      <circle cx="80" cy="80" r="50" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1.5" />

      {/* Orbiting Pulsing Signal Spark */}
      <circle cx="80" cy="80" r="50" stroke="url(#gold-gradient-orbit)" strokeWidth="3" strokeDasharray="20 294" strokeLinecap="round" className="orbit-signal" style={{ transformOrigin: "80px 80px" }} />

      {/* Planner Node */}
      <g className="agent-node" transform="translate(80, 30)">
        <circle cx="0" cy="0" r="15" fill="#060606" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="12" fill="rgba(212, 175, 55, 0.04)" className="node-glow" />
        <text x="0" y="3" fontSize="8" fill="var(--accent-gold-light)" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-display)">PLAN</text>
      </g>

      {/* Executor Node */}
      <g className="agent-node" transform="translate(123, 105)">
        <circle cx="0" cy="0" r="15" fill="#060606" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="12" fill="rgba(212, 175, 55, 0.04)" className="node-glow" />
        <text x="0" y="3" fontSize="8" fill="var(--accent-gold-light)" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-display)">ACT</text>
      </g>

      {/* Validator Node */}
      <g className="agent-node" transform="translate(37, 105)">
        <circle cx="0" cy="0" r="15" fill="#060606" stroke="var(--accent-gold)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.35))" }} />
        <circle cx="0" cy="0" r="12" fill="rgba(212, 175, 55, 0.1)" className="node-glow-active" />
        <text x="0" y="3" fontSize="7" fill="var(--accent-gold-light)" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-display)">CHECK</text>
      </g>

      {/* Dynamic Gradients */}
      <defs>
        <radialGradient id="gold-gradient-orbit" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-gold-light)" stopOpacity="1" />
          <stop offset="40%" stopColor="var(--accent-gold)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const ScraperQueueTelemetry = () => (
  <div className="telemetry-box scraper-telemetry" style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", width: "100%" }}>
    {/* Token Bucket Meter */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255, 255, 255, 0.02)", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(212, 175, 55, 0.06)" }}>
      <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Token Bucket</span>
      <div style={{ display: "flex", gap: "5px" }}>
        <span className="token-dot active"></span>
        <span className="token-dot active"></span>
        <span className="token-dot active"></span>
        <span className="token-dot active cooldown"></span>
      </div>
    </div>

    {/* Concurrency Threads */}
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div className="scraper-thread">
        <span className="thread-badge run">Thread-01</span>
        <div className="thread-progress"><div className="fill fill-1"></div></div>
        <span className="thread-status text-gold">200 OK</span>
      </div>
      <div className="scraper-thread">
        <span className="thread-badge run">Thread-02</span>
        <div className="thread-progress"><div className="fill fill-2"></div></div>
        <span className="thread-status text-gold">200 OK</span>
      </div>
      <div className="scraper-thread throttled">
        <span className="thread-badge limit">Thread-03</span>
        <div className="thread-progress"><div className="fill fill-3"></div></div>
        <span className="thread-status text-red">429 Limit</span>
      </div>
    </div>
  </div>
);

const SpeechWaveTelemetry = () => (
  <div className="telemetry-box speech-telemetry" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", height: "70px", width: "100%" }}>
    <div className="speech-bar bar-1"></div>
    <div className="speech-bar bar-2"></div>
    <div className="speech-bar bar-3"></div>
    <div className="speech-bar bar-4"></div>
    <div className="speech-bar bar-5"></div>
    <div className="speech-bar bar-6"></div>
    <div className="speech-bar bar-7"></div>
    <div className="speech-bar bar-8"></div>
    <div className="speech-bar bar-9"></div>
    <div className="speech-bar bar-10"></div>
    <div className="speech-bar bar-11"></div>
    <div className="speech-bar bar-12"></div>
  </div>
);

export default function Home() {
  // Navigation scrolling state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills interactive category state
  const [activeSkillCategory, setActiveSkillCategory] = useState<"ai" | "ml" | "web" | "tools">("ai");

  // Selected project for Details Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active project index for the premium 3D stacked carousel
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Blogs category filter and immersive drawer states
  const [activeBlogCategory, setActiveBlogCategory] = useState<"All" | "AI & ML" | "System Architecture" | "Algorithms">("All");
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

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
  const [profileImg, setProfileImg] = useState("/assets/profile.jpg");
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

  // Prevent body scrolling when immersive reading drawer is open, and intercept Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBlogPost(null);
      }
    };
    if (selectedBlogPost) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedBlogPost]);

  // Dynamic Scroll Progress tracker mapping to CSS variable coordinates
  const handleDrawerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight > 0) {
      const scrollPercent = (target.scrollTop / scrollHeight) * 100;
      target.style.setProperty("--reading-progress", `${scrollPercent}%`);
    } else {
      target.style.setProperty("--reading-progress", "0%");
    }
  };

  // Helper to route post ID to the correct telemetry visualizer
  const renderTelemetry = (id: string) => {
    if (id === "nexus-forecasting") return <StockChartTelemetry />;
    if (id === "hermes-agent-patterns") return <AgentLoopTelemetry />;
    if (id === "high-throughput-scrapers") return <ScraperQueueTelemetry />;
    return <SpeechWaveTelemetry />;
  };

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
      link: "#",
      src: "/assets/nexus_dashboard.png",
      github: "https://github.com/kinjalr7/Nexus-Stock-Market-Analytics"
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
      link: "#",
      src: "/assets/hermes_seo.png",
      github: "https://github.com/kinjalr7/SEO-Improve-Hermes-Agent"
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
      link: "#",
      src: "/assets/social_analytics.png",
      github: "https://github.com/kinjalr7/AI-Social-Media-Analytics"
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
      link: "#",
      src: "/assets/smartin_assistant.png",
      github: "https://github.com/kinjalr7/SmartIn-Voice-Companion"
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
          <a href="#" className="nav-logo" id="nav-logo-btn" title="Kinjal Rathod - Home">
            <span className="gold-gradient-text gold-glow-text">KR.</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link" id="nav-link-about" title="About Kinjal Rathod">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" id="nav-link-skills" title="Kinjal's Skills and Expertise">
                Expertise
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link" id="nav-link-experience" title="Kinjal's Professional Timeline">
                Timeline
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" id="nav-link-projects" title="Kinjal's Selected Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#blogs" className="nav-link" id="nav-link-blogs" title="Kinjal's Technical Chronicles & Blogs">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="gold-btn" id="nav-link-contact" title="Contact Kinjal Rathod" style={{ padding: "8px 20px", fontSize: "0.9rem" }}>
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
                  title="About Kinjal Rathod"
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
                  title="Kinjal's Skills and Expertise"
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
                  title="Kinjal's Professional Timeline"
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
                  title="Kinjal's Selected Projects"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="nav-link"
                  id="mobile-nav-blogs"
                  title="Kinjal's Technical Chronicles & Blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="gold-btn"
                  id="mobile-nav-contact"
                  title="Contact Kinjal Rathod"
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
                  <a href="#projects" className="gold-btn" id="hero-projects-cta" title="Explore Kinjal's Projects">
                    Explore Work <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="gold-btn-outline" id="hero-contact-cta" title="Get in Touch with Kinjal Rathod">
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
                    <a href="https://github.com/kinjalr7" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Kinjal's GitHub Profile" style={{ width: "36px", height: "36px" }}>
                      <GithubIcon size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/kinjalrathod2908/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Kinjal's LinkedIn Profile" style={{ width: "36px", height: "36px" }}>
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

            {/* macOS-style Aceternity UI Floating Dock Navigation */}
            <FloatingSkillsDock
              activeCategory={activeSkillCategory}
              setActiveCategory={setActiveSkillCategory}
              categories={[
                { id: "ai", title: "AI & Agentic Systems", icon: <Brain size={20} /> },
                { id: "ml", title: "ML & Data Science", icon: <Cpu size={20} /> },
                { id: "web", title: "Web & Core Backend", icon: <Terminal size={20} /> },
                { id: "tools", title: "Tools & Automation", icon: <Database size={20} /> }
              ]}
            />

            {/* Skill Showcase Card with dynamic micro-cards and staggered load animations */}
            <motion.div
              key={activeSkillCategory}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 14 }}
              className="glass-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ maxWidth: "900px", margin: "0 auto", padding: "48px", border: "1.5px solid rgba(212, 175, 55, 0.16)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px", borderBottom: "1px solid rgba(212, 175, 55, 0.1)", paddingBottom: "20px" }}>
                <div className="achievement-icon-box" style={{ background: "rgba(212, 175, 55, 0.15)", width: "52px", height: "52px", borderRadius: "12px" }}>
                  {skillCategories[activeSkillCategory].icon}
                </div>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-gold-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Capabilities Category</span>
                  <h3 style={{ fontSize: "1.65rem", marginTop: "2px" }} className="gold-gradient-text">{skillCategories[activeSkillCategory].title}</h3>
                </div>
              </div>

              <motion.div
                className="skill-tags"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {skillCategories[activeSkillCategory].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 200, damping: 15 }
                      }
                    }}
                    className="skill-tag"
                    style={{
                      fontSize: "1.05rem",
                      padding: "12px 24px",
                      background: "rgba(12, 12, 12, 0.75)",
                      border: "1.5px solid rgba(212, 175, 55, 0.08)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      borderColor: "rgba(212, 175, 55, 0.35)",
                      background: "rgba(212, 175, 55, 0.06)",
                      boxShadow: "0 8px 25px rgba(212, 175, 55, 0.12)"
                    }}
                  >
                    <span style={{ color: "var(--accent-gold-light)", display: "inline-flex" }}>✦</span>
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
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
          <div className="section-container" style={{ maxWidth: "1150px" }}>
            <div className="section-title-wrapper" style={{ marginBottom: "50px" }}>
              <span className="section-subtitle">Portfolio</span>
              <h2 className="section-main-title">Selected AI & Web Systems</h2>
            </div>

            {/* Aceternity UI Animated Projects Stack Layout */}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)", gap: "60px", alignItems: "center" }} className="projects-animated-grid">

              {/* Left Column: 3D overlapping card stack (Image frame) */}
              <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "440px" }}>
                <AnimatePresence mode="popLayout">
                  {projects.map((project, index) => {
                    const isActive = index === activeProjectIndex;
                    // Proportional stable offset rotation for stack depth
                    const rotation = isActive ? 0 : (index - activeProjectIndex) * 5 + (Math.sin(index) * 4);
                    const scale = isActive ? 1.0 : 0.9 - Math.abs(index - activeProjectIndex) * 0.04;
                    const zIndex = isActive ? 40 : 20 - Math.abs(index - activeProjectIndex);
                    const translateX = (index - activeProjectIndex) * 24;
                    const opacity = isActive ? 1.0 : 0.3 - Math.abs(index - activeProjectIndex) * 0.08;

                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 10 - 5, y: 15 }}
                        animate={{
                          opacity: opacity > 0 ? opacity : 0,
                          scale: scale,
                          rotate: rotation,
                          zIndex: zIndex,
                          x: translateX,
                          y: 0
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          rotate: Math.random() * 12 - 6,
                          y: -20,
                          transition: { duration: 0.3 }
                        }}
                        transition={{ type: "spring", stiffness: 140, damping: 16 }}
                        style={{
                          position: "absolute",
                          width: "100%",
                          maxWidth: "460px",
                          aspectRatio: "1.25 / 1",
                          borderRadius: "28px",
                          overflow: "hidden",
                          border: "1.5px solid rgba(212, 175, 55, 0.22)",
                          boxShadow: isActive
                            ? "0 25px 55px rgba(0, 0, 0, 0.85), 0 0 35px rgba(212, 175, 55, 0.12)"
                            : "0 15px 35px rgba(0, 0, 0, 0.75)",
                          transformOrigin: "bottom center",
                          background: "var(--bg-tertiary)"
                        }}
                      >
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                          <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            sizes="460px"
                            priority
                            style={{ objectFit: "cover", filter: isActive ? "none" : "brightness(0.6) saturate(0.8)" }}
                          />
                          <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
                            display: "flex",
                            alignItems: "flex-end",
                            padding: "24px",
                            pointerEvents: "none"
                          }}>
                            {isActive && (
                              <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                  fontSize: "0.82rem",
                                  fontWeight: 700,
                                  color: "var(--accent-gold-light)",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.06em",
                                  background: "rgba(212, 175, 55, 0.12)",
                                  border: "1px solid rgba(212, 175, 55, 0.28)",
                                  padding: "4px 12px",
                                  borderRadius: "12px",
                                  backdropFilter: "blur(6px)"
                                }}
                              >
                                {project.subtitle}
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Right Column: Title, Role, Summary, Highlights, Stack, and controls */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="project-details-column">

                {/* Active info header */}
                <motion.div
                  key={`info-${activeProjectIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  style={{ display: "flex", flexDirection: "column", gap: "6px" }}
                >
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-gold-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {projects[activeProjectIndex].role}
                  </span>
                  <h3 style={{ fontSize: "2.1rem", fontWeight: 800, lineHeight: 1.15 }} className="gold-gradient-text">
                    {projects[activeProjectIndex].title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1.06rem", lineHeight: 1.6, marginTop: "8px" }}>
                    {projects[activeProjectIndex].summary}
                  </p>
                </motion.div>

                {/* Staggered achievements / highlights */}
                <motion.div
                  key={`achievements-${activeProjectIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "10px 0" }}
                >
                  {projects[activeProjectIndex].highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.96rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--accent-gold-light)", fontSize: "0.8rem", marginTop: "2px" }}>✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Dynamic Tech Stack Badges */}
                <motion.div
                  key={`tech-${activeProjectIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                >
                  {projects[activeProjectIndex].tech.slice(0, 7).map((tech, idx) => (
                    <span key={idx} className="project-tech-tag" style={{ background: "rgba(212, 175, 55, 0.06)", border: "1px solid rgba(212, 175, 55, 0.18)" }}>
                      {tech}
                    </span>
                  ))}
                  {projects[activeProjectIndex].tech.length > 7 && (
                    <span className="project-tech-tag" style={{ background: "rgba(255,255,255,0.03)" }}>
                      +{projects[activeProjectIndex].tech.length - 7} more
                    </span>
                  )}
                </motion.div>

                {/* Bottom Action bar (modal trigger + navigation sliders) */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px" }} className="project-actions-row">
                  <div style={{ display: "flex", gap: "12px" }} className="project-btn-group">
                    <button
                      className="gold-btn-outline"
                      id={`view-details-${projects[activeProjectIndex].id}`}
                      style={{ padding: "10px 20px", fontSize: "0.84rem", cursor: "pointer" }}
                      onClick={() => setSelectedProject(projects[activeProjectIndex])}
                    >
                      Deconstruct Architecture <ExternalLink size={14} />
                    </button>
                    <a
                      href={projects[activeProjectIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-btn"
                      style={{ padding: "10px 20px", fontSize: "0.84rem", cursor: "pointer", boxShadow: "none" }}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={14} /> Source Code
                    </a>
                  </div>

                  {/* Left / Right Aceternity controls */}
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                      onClick={() => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(212, 175, 55, 0.22)",
                        background: "rgba(10, 10, 10, 0.65)",
                        color: "var(--accent-gold-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.25s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 175, 55, 0.16)";
                        e.currentTarget.style.borderColor = "var(--accent-gold)";
                        e.currentTarget.style.transform = "translateX(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(10, 10, 10, 0.65)";
                        e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.22)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                      aria-label="Previous project"
                    >
                      <ChevronRight size={20} style={{ transform: "rotate(180deg)" }} />
                    </button>
                    <button
                      onClick={() => setActiveProjectIndex((prev) => (prev + 1) % projects.length)}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(212, 175, 55, 0.22)",
                        background: "rgba(10, 10, 10, 0.65)",
                        color: "var(--accent-gold-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.25s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 175, 55, 0.16)";
                        e.currentTarget.style.borderColor = "var(--accent-gold)";
                        e.currentTarget.style.transform = "translateX(2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(10, 10, 10, 0.65)";
                        e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.22)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

              </div>

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

        {/* Blogs Section */}
        <section id="blogs" style={{ position: "relative", overflow: "hidden" }}>
          <div className="section-container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Deep Dives</span>
              <h2 className="section-main-title">Technical Chronicles</h2>
            </div>

            {/* Sliding Category Dock */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "54px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  padding: "6px",
                  background: "rgba(10, 10, 10, 0.45)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "40px",
                  border: "1.5px solid rgba(212, 175, 55, 0.16)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
                }}
              >
                {(["All", "AI & ML", "System Architecture", "Algorithms"] as const).map((cat) => {
                  const isActive = activeBlogCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveBlogCategory(cat)}
                      style={{
                        position: "relative",
                        padding: "10px 24px",
                        borderRadius: "30px",
                        border: "none",
                        background: "transparent",
                        color: isActive ? "var(--accent-gold-light)" : "var(--text-secondary)",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        transition: "color 0.3s ease",
                        zIndex: 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {cat}
                      {isActive && (
                        <motion.div
                          layoutId="activeBlogTab"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(212, 175, 55, 0.15)",
                            border: "1px solid rgba(212, 175, 55, 0.3)",
                            boxShadow: "0 0 15px rgba(212, 175, 55, 0.12)",
                            borderRadius: "30px",
                            zIndex: -1
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Blogs Bento Grid */}
            <motion.div
              layout
              className="blogs-bento-grid"
              style={{
                display: "grid",
                gridTemplateColumns: (activeBlogCategory as any) === "All"
                  ? "repeat(3, 1fr)"
                  : (blogs.filter((b) => (activeBlogCategory as any) === "All" || (b.category as any) === (activeBlogCategory as any)).length === 2 ? "repeat(2, 1fr)" : "repeat(3, 1fr)"),
                gap: "32px",
                width: "100%"
              }}
            >
              <AnimatePresence mode="popLayout">
                {blogs
                  .filter((b) => (activeBlogCategory as any) === "All" || (b.category as any) === (activeBlogCategory as any))
                  .map((post, _, filteredArray) => {
                    const isAll = (activeBlogCategory as any) === "All";

                    // Render wide horizontal split if under All wide spots, or if a single post is isolated
                    const renderWide = (isAll && (post.id === "nexus-forecasting" || post.id === "edge-ai-offline-nlp")) || filteredArray.length === 1;

                    // Symmetrical column spans: single post spans all 3 cols, wide spans 2, square spans 1
                    let columnSpanStyle = "span 1";
                    if (isAll) {
                      if (post.id === "nexus-forecasting" || post.id === "edge-ai-offline-nlp") {
                        columnSpanStyle = "span 2";
                      } else {
                        columnSpanStyle = "span 1";
                      }
                    } else {
                      if (filteredArray.length === 1) {
                        columnSpanStyle = "span 3";
                      } else {
                        columnSpanStyle = "span 1";
                      }
                    }

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        key={post.id}
                        className={`glass-card bento-card ${renderWide ? "bento-wide" : "bento-square"}`}
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                        onClick={() => setSelectedBlogPost(post)}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          padding: "32px",
                          position: "relative",
                          overflow: "hidden",
                          gridColumn: columnSpanStyle
                        }}
                      >
                        {/* Top Telemetry Visualizations & Information Grid */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <span
                              style={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "var(--accent-gold-light)",
                                background: "rgba(212, 175, 55, 0.06)",
                                padding: "4px 12px",
                                borderRadius: "6px",
                                border: "1px solid rgba(212, 175, 55, 0.12)"
                              }}
                            >
                              {post.category}
                            </span>
                            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>
                              {post.readingTime}
                            </span>
                          </div>

                          {/* For Wide Bento slots: Dual column layout separating text and telemetry */}
                          {renderWide ? (
                            <div className="bento-wide-inner-grid" style={{ height: "100%", flexGrow: 1 }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <h3 style={{ fontSize: "1.45rem", lineHeight: 1.25, fontWeight: 700, color: "var(--text-primary)" }}>
                                  {post.title}
                                </h3>
                                <p style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "var(--text-secondary)" }}>
                                  {post.excerpt}
                                </p>
                              </div>
                              <div style={{ display: "flex", justifyContent: "center", width: "100%", opacity: 0.9 }}>
                                {renderTelemetry(post.id)}
                              </div>
                            </div>
                          ) : (
                            /* For Square Bento slots: Vertical layout stacked telemetry over text */
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1, justifyContent: "space-between", height: "100%" }}>
                              <div style={{ display: "flex", justifyContent: "center", width: "100%", padding: "10px 0", opacity: 0.9 }}>
                                {renderTelemetry(post.id)}
                              </div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <h3 style={{ fontSize: "1.25rem", lineHeight: 1.3, fontWeight: 700, color: "var(--text-primary)" }}>
                                  {post.title}
                                </h3>
                                <p style={{ fontSize: "0.88rem", lineHeight: 1.5, color: "var(--text-secondary)" }}>
                                  {post.excerpt}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Footer Details */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "24px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                            paddingTop: "16px",
                            width: "100%"
                          }}
                        >
                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.date}</span>
                          <div
                            className="gold-gradient-text"
                            style={{
                              fontSize: "0.88rem",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: "4px"
                            }}
                          >
                            Explore Diagnostics <ChevronRight size={14} />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Immersive Reading Drawer (Slide-In) */}
        <AnimatePresence>
          {selectedBlogPost && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                maxWidth: "850px",
                height: "100vh",
                background: "rgba(6, 6, 6, 0.98)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                borderLeft: "1px solid rgba(212, 175, 55, 0.16)",
                boxShadow: "-10px 0 50px rgba(0, 0, 0, 0.95)",
                zIndex: 2000,
                overflowY: "auto",
                padding: "0"
              }}
              onScroll={handleDrawerScroll}
            >
              {/* Reading Progress Indicator */}
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "rgba(255, 255, 255, 0.05)",
                  zIndex: 2100
                }}
              >
                <div
                  className="reading-progress-bar"
                  style={{
                    height: "100%",
                    width: "var(--reading-progress, 0%)",
                    background: "linear-gradient(to right, var(--accent-gold), var(--accent-gold-light))",
                    boxShadow: "0 0 10px rgba(255, 229, 127, 0.6)"
                  }}
                />
              </div>

              {/* Drawer Content Wrapper */}
              <div style={{ padding: "48px 48px 80px 48px", position: "relative" }}>
                {/* Floating Tactile Top Close Button */}
                <button
                  onClick={() => setSelectedBlogPost(null)}
                  style={{
                    position: "absolute",
                    top: "36px",
                    right: "36px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    background: "rgba(15, 15, 15, 0.8)",
                    color: "var(--accent-gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                    transition: "all 0.3s ease",
                    zIndex: 2250
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-gold)";
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(212, 175, 55, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
                  }}
                  title="Close (Esc)"
                  aria-label="Close reading drawer"
                >
                  <X size={20} />
                </button>

                {/* Back Link */}
                <button
                  onClick={() => setSelectedBlogPost(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "none",
                    border: "none",
                    color: "var(--accent-gold-light)",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    marginBottom: "32px",
                    padding: 0
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>←</span> Back to Chronicles
                </button>

                {/* Header Info */}
                <div style={{ marginBottom: "36px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "16px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--accent-gold-light)",
                        background: "rgba(212, 175, 55, 0.08)",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        border: "1px solid rgba(212, 175, 55, 0.15)"
                      }}
                    >
                      {selectedBlogPost.category}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      {selectedBlogPost.date}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      • {selectedBlogPost.readingTime}
                    </span>
                  </div>

                  <h1
                    className="gold-gradient-text gold-glow-text"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                      lineHeight: 1.25,
                      fontWeight: 800,
                      marginBottom: "24px"
                    }}
                  >
                    {selectedBlogPost.title}
                  </h1>

                  <p
                    style={{
                      fontSize: "1.12rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                      borderLeft: "3px solid var(--accent-gold)",
                      paddingLeft: "16px"
                    }}
                  >
                    {selectedBlogPost.excerpt}
                  </p>
                </div>

                {/* Article Divider */}
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "linear-gradient(90deg, rgba(212, 175, 55, 0.25), transparent)",
                    marginBottom: "40px"
                  }}
                />

                {/* Render Article Content Body */}
                <article
                  className="blog-content-body"
                  dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
                />

                {/* Drawer Closing Bottom CTA */}
                <div
                  style={{
                    borderTop: "1px solid rgba(212, 175, 55, 0.15)",
                    marginTop: "60px",
                    paddingTop: "40px",
                    textAlign: "center"
                  }}
                >
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                    Finished reading this deep dive? Return to the main chronicles array.
                  </p>
                  <button
                    onClick={() => setSelectedBlogPost(null)}
                    className="gold-btn"
                    style={{ padding: "12px 36px" }}
                  >
                    Close & Go Back
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
                        <a href="mailto:kinjalrathodmr@gmail.com" className="contact-detail-value" id="direct-email-link" title="Send email to Kinjal Rathod">
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
                        <a href="tel:7203855029" className="contact-detail-value" id="direct-phone-link" title="Call Kinjal Rathod">
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
                      title="Kinjal's GitHub Profile"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kinjalrathod2908/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      id="contact-linkedin-social"
                      title="Kinjal's LinkedIn Profile"
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
              title="Kinjal's GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kinjalrathod2908/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              id="footer-linkedin"
              title="Kinjal's LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:kinjalrathodmr@gmail.com" className="footer-social-link" id="footer-email" title="Send email to Kinjal Rathod">
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
