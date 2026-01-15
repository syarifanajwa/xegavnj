"use client";
import React from "react";
import Link from "next/link";
import { AppHeader, AppFooter, Button, Card, ThemeProvider, useTheme } from "../index";
// We don't need the local theme context anymore if we use the one from library

// Component to access theme for specific page styles if needed
// Component to access theme for specific page styles if needed
function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <div style={{ 
      padding: "5rem 2rem", 
      textAlign: "center", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "2rem" 
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "0.5rem", color: theme === 'dark' ? '#ffffff' : '#111827' }}>
        Bangun antarmuka yang indah dengan cepat.
      </h1>
      <p style={{ fontSize: "1.25rem", opacity: 0.8, maxWidth: "600px", color: theme === 'dark' ? '#e2e8f0' : '#1f2937' }}>
        DapoerRasa menyediakan kumpulan komponen React yang mudah diakses, dapat digunakan kembali, dan dapat disusun yang membuat pembuatan situs web menjadi sangat mudah.
      </p>
      <Link href="/docs">
        <Button label="Mulai Sekarang" />
      </Link>
    </div>
  );
}

function TechStack() {
  const stack = {
    "Next.js": "16.0.1",
    "React": "19.2.0",
    "TailwindCSS": "4.1.17",
    "Lucide React": "Iconography"
  };

  return (
    <div style={{ padding: "4rem 2rem", background: "rgba(0,0,0,0.02)" }}>
      <h3 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.8rem" }}>Teknologi Pendukung</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        {Object.entries(stack).map(([name, version]) => (
          <div key={name} style={{ 
            padding: "1.5rem", 
            borderRadius: "12px", 
            border: "1px solid rgba(128,128,128,0.2)",
            textAlign: "center" 
          }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{name}</h4>
            <p style={{ opacity: 0.7 }}>{version}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppHeader />
        
        <main style={{ flex: 1 }}>
          <HeroSection />
          <TechStack />
        </main>

        <AppFooter />
      </div>
  );
}
