"use client"

import { useRef, useState, useEffect } from "react"
import {NavLink} from "react-router-dom"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial, Float, Environment, Line } from "@react-three/drei"
import * as THREE from "three"
import "../pages_css/Technology3D.css"

// Animated 3D Sphere for Hero
function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#1e40af"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Data Network Visualization
function DataNetwork() {
  const groupRef = useRef()
  const particlesRef = useRef([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }

    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        particle.position.y = Math.sin(state.clock.getElapsedTime() + i) * 0.5
      }
    })
  })

  const positions = []
  for (let i = 0; i < 50; i++) {
    positions.push({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 8,
    })
  }

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]} ref={(el) => (particlesRef.current[i] = el)}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

// AI Brain Visualization
function AIBrain() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Torus args={[1.5, 0.4, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Torus>
      <Torus args={[1.5, 0.4, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </Torus>
      <Torus args={[1.5, 0.4, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  )
}

// Portfolio Cube Grid
function PortfolioCubes() {
  const groupRef = useRef()
  const cubesRef = useRef([])

  useFrame((state) => {
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        cube.position.y = Math.sin(state.clock.getElapsedTime() + i * 0.5) * 0.3
        cube.rotation.y = state.clock.getElapsedTime() * 0.5
      }
    })
  })

  const positions = [
    [-2, 0, 0],
    [0, 0, 0],
    [2, 0, 0],
    [-2, 0, -2],
    [0, 0, -2],
    [2, 0, -2],
  ]

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Box key={i} position={pos} args={[0.8, 0.8, 0.8]} ref={(el) => (cubesRef.current[i] = el)}>
          <meshStandardMaterial color={i % 2 === 0 ? "#0ea5e9" : "#1e40af"} metalness={0.6} roughness={0.3} />
        </Box>
      ))}
    </group>
  )
}

// Risk Shield Visualization
function RiskShield() {
  const shieldRef = useRef()

  useFrame((state) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      shieldRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group ref={shieldRef}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#ef4444" transparent opacity={0.3} metalness={0.8} roughness={0.2} wireframe />
      </Sphere>
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.4} metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  )
}

// Security Lock Visualization
function SecurityLock() {
  const lockRef = useRef()

  useFrame((state) => {
    if (lockRef.current) {
      lockRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3
    }
  })

  return (
    <group ref={lockRef}>
      <Box args={[1.5, 2, 1]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#059669" metalness={0.9} roughness={0.1} />
      </Box>
      <Torus args={[0.8, 0.2, 16, 32]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#10b981" metalness={0.9} roughness={0.1} />
      </Torus>
      <Sphere args={[0.3, 32, 32]} position={[0, -0.5, 0.6]}>
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.8} />
      </Sphere>
    </group>
  )
}

// Client Portal Visualization
function ClientPortal() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Torus args={[2, 0.1, 16, 100]}>
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
      </Torus>
      <Torus args={[1.5, 0.08, 16, 100]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </Torus>
      <Torus args={[1, 0.06, 16, 100]}>
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
      </Torus>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </Sphere>
    </group>
  )
}

function DataGlobe() {
  const globeRef = useRef()
  const linesRef = useRef([])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }

    linesRef.current.forEach((line, i) => {
      if (line) {
        line.rotation.y = state.clock.getElapsedTime() * (0.2 + i * 0.1)
      }
    })
  })

  // Create orbital paths
  const orbits = []
  for (let i = 0; i < 5; i++) {
    const points = []
    const radius = 2 + i * 0.3
    for (let j = 0; j <= 64; j++) {
      const angle = (j / 64) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle * 2) * 0.5, Math.sin(angle) * radius))
    }
    orbits.push(points)
  }

  return (
    <group>
      {/* Central Globe */}
      <Sphere ref={globeRef} args={[1.8, 64, 64]}>
        <meshStandardMaterial color="#1e40af" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Inner solid sphere */}
      <Sphere args={[1.7, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Data stream orbits */}
      {orbits.map((points, i) => (
        <group key={i} ref={(el) => (linesRef.current[i] = el)}>
          <Line points={points} color={i % 2 === 0 ? "#60a5fa" : "#3b82f6"} lineWidth={2} />
          {/* Data points on orbits */}
          <Sphere args={[0.08, 16, 16]} position={points[Math.floor(Math.random() * points.length)]}>
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1} />
          </Sphere>
        </group>
      ))}
    </group>
  )
}

function PortfolioNodes() {
  const groupRef = useRef()
  const nodesRef = useRef([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }

    nodesRef.current.forEach((node, i) => {
      if (node) {
        node.position.y = Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.2
        node.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.1)
      }
    })
  })

  const nodePositions = [
    [0, 0, 0], // Center
    [2, 1, 0], // Top right
    [-2, 1, 0], // Top left
    [2, -1, 0], // Bottom right
    [-2, -1, 0], // Bottom left
    [0, 0, 2], // Front
    [0, 0, -2], // Back
  ]

  const connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 2],
    [3, 4],
    [5, 6],
    [1, 5],
    [2, 6],
  ]

  const colors = ["#0ea5e9", "#1e40af", "#3b82f6", "#60a5fa", "#0284c7"]

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[nodePositions[conn[0]], nodePositions[conn[1]]]}
          color="#3b82f6"
          lineWidth={1.5}
          transparent
          opacity={0.4}
        />
      ))}

      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <Sphere key={i} ref={(el) => (nodesRef.current[i] = el)} position={pos} args={[i === 0 ? 0.5 : 0.3, 32, 32]}>
          <meshStandardMaterial
            color={colors[i % colors.length]}
            metalness={0.8}
            roughness={0.2}
            emissive={colors[i % colors.length]}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  )
}

export default function TechnologyPage() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".Technology3d-section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index)
        }
      })
    }

    // window.addEventListener("scroll", handleScroll)
    // return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="Technology3d-page">
      {/* Hero Section */}
      <section className="Technology3d-hero">
        <div className="Technology3d-hero-canvas">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
            <AnimatedSphere />
            <Environment preset="city" />
            <OrbitControls 
              makeDefault
              enableZoom={false} 
              enablePan={false}
            />
          </Canvas>
        </div>
        <div className="Technology3d-hero-content">
          <h1 className="Technology3d-hero-title">Technology</h1>
          <p className="Technology3d-hero-subtitle">Where Intelligence Meets Precision</p>
          <p className="Technology3d-hero-description">
            At MAPSIGMA CAPITAL, technology is not an afterthought. It is a strategic foundation. We have designed and
            engineered a robust, intelligent and adaptive technology ecosystem that empowers everything we do.
          </p>
        </div>
      </section>

      {/* Real Time Data Infrastructure */}
      <section className="Technology3d-section Technology3d-section-light">
        <div className="Technology3d-section-content">
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">INFRASTRUCTURE</div>
            <h2 className="Technology3d-section-title">Real Time Data Infrastructure</h2>
            <p className="Technology3d-section-description">
              At the core of MAPSIGMA CAPITAL's technology ecosystem is our Real Time Data Infrastructure, a
              high-performance, scalable system designed to ingest, process and analyze millions of data points every
              second from markets around the world.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">⚡</div>
                <div className="Technology3d-feature-text">
                  <h3>Ultra-Low Latency</h3>
                  <p>Process millions of data points with millisecond precision</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🌐</div>
                <div className="Technology3d-feature-text">
                  <h3>Global Coverage</h3>
                  <p>Live feeds from equities, bonds, currencies, and commodities worldwide</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">📊</div>
                <div className="Technology3d-feature-text">
                  <h3>Intelligent Filtering</h3>
                  <p>Sophisticated normalization and standardization for seamless analysis</p>
                </div>
              </div>
            </div>
            <NavLink to="/RealTime" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[0, 10, 0]} intensity={0.5} color="#3b82f6" />
              <DataGlobe />
              <OrbitControls 
                makeDefault
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
        </div>
      </section>

      {/* AI Enhanced Investment Models */}
      <section className="Technology3d-section Technology3d-section-dark">
        <div className="Technology3d-section-content Technology3d-section-reverse">
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              <AIBrain />
              <Environment preset="night" />
              <OrbitControls 
                makeDefault
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1}
              />
            </Canvas>
          </div>
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">ARTIFICIAL INTELLIGENCE</div>
            <h2 className="Technology3d-section-title">AI Enhanced Investment Models</h2>
            <p className="Technology3d-section-description">
              Our AI Enhanced Investment Models harness the power of advanced machine learning and artificial
              intelligence to transform complex market data into actionable investment insights.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🧠</div>
                <div className="Technology3d-feature-text">
                  <h3>Pattern Recognition</h3>
                  <p>Uncover non-obvious patterns invisible to traditional analysis</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🔮</div>
                <div className="Technology3d-feature-text">
                  <h3>Scenario Simulation</h3>
                  <p>Model macroeconomic scenarios across multiple time horizons</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🎯</div>
                <div className="Technology3d-feature-text">
                  <h3>Stress Testing</h3>
                  <p>Rigorously test portfolios under extreme market conditions</p>
                </div>
              </div>
            </div>
            <NavLink to="/AiPage" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Portfolio Management System */}
      <section className="Technology3d-section Technology3d-section-light">
        <div className="Technology3d-section-content">
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">MANAGEMENT</div>
            <h2 className="Technology3d-section-title">Portfolio Management System</h2>
            <p className="Technology3d-section-description">
              MAPSIGMA CAPITAL's Portfolio Management System is the central hub that brings together every element of
              portfolio oversight, ensuring that our investment strategies are executed with precision, discipline and
              transparency.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">📈</div>
                <div className="Technology3d-feature-text">
                  <h3>Real-Time Tracking</h3>
                  <p>Monitor every position across all asset classes instantly</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">⚙️</div>
                <div className="Technology3d-feature-text">
                  <h3>Automated Execution</h3>
                  <p>Streamline trade execution and compliance checks</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">📋</div>
                <div className="Technology3d-feature-text">
                  <h3>Audit Trails</h3>
                  <p>Complete transparency with comprehensive logging</p>
                </div>
              </div>
            </div>
            <NavLink to="/PMS" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[0, 10, 0]} intensity={0.8} color="#0ea5e9" />
              <PortfolioNodes />
              <OrbitControls makeDefault enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>

      {/* Risk Command Center */}
      <section className="Technology3d-section Technology3d-section-dark">
        <div className="Technology3d-section-content Technology3d-section-reverse">
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, 0, -10]} intensity={0.8} color="#ef4444" />
              <RiskShield />
              <Environment preset="sunset" />
              <OrbitControls 
                makeDefault
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.8}
              />
            </Canvas>
          </div>
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">RISK MANAGEMENT</div>
            <h2 className="Technology3d-section-title">Risk Command Center</h2>
            <p className="Technology3d-section-description">
              A real-time intelligence platform designed to proactively monitor, assess and guide risk across all
              portfolios ensuring that discipline, protection and foresight are built into every investment decision.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🛡️</div>
                <div className="Technology3d-feature-text">
                  <h3>Continuous Monitoring</h3>
                  <p>Track exposure, volatility, and correlation in real-time</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">💡</div>
                <div className="Technology3d-feature-text">
                  <h3>Smart Recommendations</h3>
                  <p>AI-driven solutions for risk mitigation and optimization</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">⚠️</div>
                <div className="Technology3d-feature-text">
                  <h3>Instant Alerts</h3>
                  <p>Customizable alerts escalated to key decision-makers</p>
                </div>
              </div>
            </div>
            <NavLink to="/RiskCommand" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="Technology3d-section Technology3d-section-light">
        <div className="Technology3d-section-content">
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">SECURITY</div>
            <h2 className="Technology3d-section-title">Cybersecurity & Data Governance</h2>
            <p className="Technology3d-section-description">
              Protecting client trust begins with protecting their data, their assets and their privacy. Our
              cybersecurity infrastructure is built on a multi-layered defense strategy with enterprise-grade encryption
              and continuous threat detection.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🔒</div>
                <div className="Technology3d-feature-text">
                  <h3>End-to-End Encryption</h3>
                  <p>Military-grade protection for all data transactions</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🔍</div>
                <div className="Technology3d-feature-text">
                  <h3>24/7 Monitoring</h3>
                  <p>AI-enabled threat detection across all networks</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">✅</div>
                <div className="Technology3d-feature-text">
                  <h3>Compliance</h3>
                  <p>GDPR, ISO 27001, and SOC 2 certified</p>
                </div>
              </div>
            </div>
            <NavLink to="/Cybersecurity" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[0, 5, 5]} intensity={1} color="#10b981" />
              <SecurityLock />
              <OrbitControls makeDefault enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>

      {/* Client Command Portal */}
      <section className="Technology3d-section Technology3d-section-dark">
        <div className="Technology3d-section-content Technology3d-section-reverse">
          <div className="Technology3d-canvas-container">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
              <ClientPortal />
              <Environment preset="studio" />
              <OrbitControls 
                makeDefault
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1.5}
              />
            </Canvas>
          </div>
          <div className="Technology3d-text-content">
            <div className="Technology3d-label">CLIENT EXPERIENCE</div>
            <h2 className="Technology3d-section-title">Client Command Portal</h2>
            <p className="Technology3d-section-description">
              A secure, intuitive, and fully personalized digital platform that gives clients real-time visibility,
              clarity and control over their portfolios. This isn't just a dashboard, it's a decision-making command
              center.
            </p>
            <div className="Technology3d-features">
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">📱</div>
                <div className="Technology3d-feature-text">
                  <h3>24/7 Access</h3>
                  <p>Monitor your portfolio from anywhere, anytime</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">📊</div>
                <div className="Technology3d-feature-text">
                  <h3>Live Performance</h3>
                  <p>Real-time updates and position-level breakdowns</p>
                </div>
              </div>
              <div className="Technology3d-feature-item">
                <div className="Technology3d-feature-icon">🎨</div>
                <div className="Technology3d-feature-text">
                  <h3>Personalized Insights</h3>
                  <p>Customized reports and curated market analysis</p>
                </div>
              </div>
            </div>
            <NavLink to="/ClientCommand" className="Technology3d-learn-more">
              Learn More →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="Technology3d-closing">
        <div className="Technology3d-closing-content">
          <h2 className="Technology3d-closing-title">Built to Adapt and Evolve</h2>
          <p className="Technology3d-closing-text">
            What we build today is designed to evolve tomorrow. Our in-house tech team continuously develops tools that
            respond to shifts in markets, regulations and client needs.
          </p>
          <p className="Technology3d-closing-emphasis">
            MAPSIGMA CAPITAL is not just tech enabled.
            <br />
            We are tech driven, insight led and future focused.
          </p>
        </div>
      </section>
    </div>
  )
}