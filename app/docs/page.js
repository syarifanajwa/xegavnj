"use client";
import React, { useState } from "react";


import { AppHeader, HeaderShowcase, AppFooter, FooterShowcase, AppSidebar, SidebarShowcase, Button, ButtonShowcase, Card, CardShowcase, useTheme } from "../../index";
import { Play, Square, CreditCard, ShoppingBag, Settings, User } from "lucide-react";

export default function DocsPage() {
  const [activeItem, setActiveItem] = useState("Get Started");
  const { theme } = useTheme();
  
  // Code block styler
  const CodeBlock = ({ code }) => (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ 
        background: "#1e1e1e", 
        color: "#d4d4d4", 
        padding: "1rem", 
        borderRadius: "8px", 
        overflowX: "auto",
        fontFamily: "monospace",
        fontSize: "0.85rem"
      }}>
        <pre>{code}</pre>
      </div>
    </div>
  );

  const PreviewBox = ({ children, title }) => (
    <div style={{ 
      border: "1px solid #e5e7eb", 
      borderRadius: "12px", 
      padding: "2rem", 
      marginTop: "2rem",
      background: "#f9fafb",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        padding: "0.25rem 0.75rem", 
        background: "#e5e7eb", 
        fontSize: "0.75rem", 
        fontWeight: "bold",
        borderBottomRightRadius: "8px",
        color: "#374151"
      }}>
        {title}
      </div>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader />
      
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ borderRight: "1px solid #e5e7eb" }}>
          <AppSidebar 
            title="Components"
            onMenuClick={(item) => setActiveItem(item)} 
          />
        </div>
        
        <main style={{ 
          flex: 1, 
          padding: (activeItem === "AppFooter" || activeItem === "AppHeader") ? "0" : "3rem", 
          maxWidth: (activeItem === "AppFooter" || activeItem === "AppHeader") ? "100%" : "900px" 
        }}>
          <div style={{ padding: (activeItem === "AppFooter" || activeItem === "AppHeader") ? "3rem" : "0" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem", color: theme === 'dark' ? '#ffffff' : '#111827' }}>{activeItem}</h1>
            <div style={{ height: "4px", width: "60px", background: "#3b82f6", borderRadius: "2px", marginBottom: "2rem" }}></div>
          </div>
          
          {activeItem === "Get Started" && (
            <div>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                Selamat datang di dokumentasi <strong>DapoerRasa</strong>. Library ini menyediakan kumpulan komponen React reusable yang dirancang untuk aplikasi web modern.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Instalasi</h3>
                <CodeBlock code="npm install xegavnj" />
              </div>
            </div>
          )}

          {activeItem === "AppSidebar" && (
            <div>
              <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
                Komponen Sidebar mendukung berbagai varian untuk menyesuaikan kebutuhan tata letak yang berbeda. Anda dapat menggunakannya sebagai daftar datar standar, bagian yang dikelompokkan, atau gaya kartu mengambang.
              </p>
              <SidebarShowcase />
            </div>
          )}

          {activeItem === "Button" && (
             <div>
                <ButtonShowcase />
             </div>
          )}

          {activeItem === "Card" && (
             <div>
                <CardShowcase />
             </div>
          )}
          
          {/* Fallback for other items */}
          {activeItem === "AppHeader" && (
            <div>
               <HeaderShowcase />
            </div>
          )}

          {activeItem === "AppFooter" && (
            <div>
              <FooterShowcase />
            </div>
          )}

        </main>
      </div>
      
      <AppFooter />
    </div>
  );
}
