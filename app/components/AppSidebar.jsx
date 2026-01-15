"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTheme } from "./ThemeSwitcher";
import { themes } from "../theme";
import { 
  Play, 
  Square, 
  CreditCard, 
  PanelTop, 
  PanelBottom, 
  Sidebar as SidebarIcon,
  Layout,
  Copy, 
  Check, 
  Code as CodeIcon,
  Home,
  Settings,
  User 
} from "lucide-react";

// Base styles for the wrapper
const SidebarWrapper = styled.aside`
  width: 250px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  border-right: 1px solid ${({ theme }) => theme.border || "#e5e7eb"};
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  ${({ variant, theme }) => variant === 'floating' && css`
    min-height: auto;
    height: calc(100vh - 2rem);
    margin: 1rem;
    border-radius: 16px;
    border: 1px solid ${theme.border || "#e5e7eb"};
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  `}
`;

const SidebarTitle = styled.h2`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary || "#6b7280"};
  margin-bottom: 1rem;
  padding-left: 0.75rem;
`;

const GroupTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary || "#3b82f6"};
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.75rem;
  opacity: 0.9;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MenuItem = styled.li`
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s;
  font-weight: 500;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.border || "#e5e7eb"};
    color: ${({ theme }) => theme.primary || "#3b82f6"};
  }

  svg {
    opacity: 0.7;
  }
  
  &:hover svg {
    opacity: 1;
  }
`;

// Helper to render a list of items
const MenuList = ({ items, currentTheme, onMenuClick }) => (
  <Menu>
    {items.map((item, index) => {
      const label = typeof item === 'string' ? item : item.label;
      const Icon = item.icon || Layout;

      return (
        <MenuItem
          key={index}
          theme={currentTheme}
          onClick={() => onMenuClick && onMenuClick(label)}
        >
          <Icon size={18} />
          {label}
        </MenuItem>
      );
    })}
  </Menu>
);

const defaultItems = [
  { label: "Get Started", icon: Play },
  { label: "Button", icon: Square },
  { label: "Card", icon: CreditCard },
  { label: "AppHeader", icon: PanelTop },
  { label: "AppFooter", icon: PanelBottom },
  { label: "AppSidebar", icon: SidebarIcon },
];

export default function AppSidebar({
  title = "Documentation",
  items = defaultItems,
  groups = [], // Array of { title: string, items: [] }
  variant = "default", // default | grouped | floating
  onMenuClick,
}) {
  const { theme: themeName } = useTheme();
  
  // Use a fallback if theme context isn't available
  // e.g. when used in isolation or passed explicitly
  const themesLib = require("../theme").themes; 
  const currentTheme = themesLib[themeName] || themesLib.light;

  return (
    <SidebarWrapper theme={currentTheme} variant={variant}>
      <SidebarTitle theme={currentTheme}>{title}</SidebarTitle>

      {variant === 'grouped' && groups.length > 0 ? (
        // Grouped Layout
        groups.map((group, idx) => (
          <div key={idx}>
            <GroupTitle theme={currentTheme}>{group.title}</GroupTitle>
            <MenuList 
              items={group.items} 
              currentTheme={currentTheme} 
              onMenuClick={onMenuClick} 
            />
          </div>
        ))
      ) : (
        // Default Layout
        <MenuList 
          items={items} 
          currentTheme={currentTheme} 
          onMenuClick={onMenuClick} 
        />
      )}
    </SidebarWrapper>
  );
}

// =============================================================================
// SHOWCASE & DOCUMENTATION WRAPPER
// =============================================================================

const ShowcaseContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 2rem;
  font-weight: 800;
`;

const ShowcaseBlock = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
`;

const PreviewArea = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f3f4f6;
  min-height: 500px;
  overflow: hidden;
`;

const ActionSelect = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    background: #f1f5f9;
    border-top: 1px solid #e2e8f0;
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background: white;
    font-size: 0.85rem;
    color: #475569;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
        background: #f8fafc;
        border-color: #94a3b8;
    }
`;

const CodeBlock = styled.div`
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  border-top: 1px solid #333;
`;

function SidebarVariantDisplay({ title, description, code, children }) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b', fontSize: '1.5rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#64748b' }}>{description}</p>
            <ShowcaseBlock>
                <PreviewArea>
                   <div style={{ transform: "scale(0.85)", height: '100%', maxHeight: '400px', border: "1px solid #e5e7eb", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", background: 'white' }}>
                      {children}
                   </div>
                </PreviewArea>
                <ActionSelect>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <ActionButton onClick={() => setShowCode(!showCode)}>
                            <CodeIcon size={16} />
                            {showCode ? "Sembunyikan Kode" : "Lihat Kode"}
                        </ActionButton>
                        {showCode && (
                            <ActionButton onClick={handleCopy}>
                                {copied ? <Check size={16} /> : <Copy size={16} />}
                                {copied ? "Disalin!" : "Salin"}
                            </ActionButton>
                        )}
                    </div>
                </ActionSelect>
                {showCode && (
                    <CodeBlock>
                        <pre>{code}</pre>
                    </CodeBlock>
                )}
            </ShowcaseBlock>
        </div>
    );
}

export function SidebarShowcase() {
  return (
    <ShowcaseContainer>
      <Title>Sidebar Variants</Title>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Komponen Sidebar dengan berbagai varian tata letak.
      </p>

      <SidebarVariantDisplay 
        title="1. Sidebar Default"
        description="Navigasi daftar datar standar."
        code={`import { AppSidebar } from "uts-ds";
import { Home, Settings } from "lucide-react";

export default function MyLayout() {
  const items = [
    { label: "Home", icon: Home },
    { label: "Settings", icon: Settings }
  ];

  return (
    <AppSidebar 
      title="My App" 
      items={items} 
      onMenuClick={(label) => console.log(label)} 
    />
  );
}`}
      >
        <AppSidebar 
             title="My App" 
             items={[
                { label: "Home", icon: Home },
                { label: "Settings", icon: Settings }
             ]}
        />
      </SidebarVariantDisplay>

      <SidebarVariantDisplay 
        title="2. Sidebar Terkelompok"
        description="Atur item ke dalam bagian berjudul menggunakan props groups."
        code={`import { AppSidebar } from "uts-ds";
import { Play, Square, User, CreditCard } from "lucide-react";

export default function MyGroupedLayout() {
  const groups = [
    { 
      title: "Main", 
      items: [{ label: "Overview", icon: Square }, { label: "Analytics", icon: Play }] 
    },
    { 
      title: "Settings", 
      items: [{ label: "Account", icon: User }, { label: "Billing", icon: CreditCard }] 
    }
  ];

  return (
    <AppSidebar 
      variant="grouped" 
      title="Dashboard" 
      groups={groups} 
    />
  );
}`}
      >
        <AppSidebar 
            variant="grouped" 
            title="Dashboard" 
            groups={[
            { title: "Main", items: [{ label: "Overview", icon: Square }, { label: "Analytics", icon: Play }] },
            { title: "Settings", items: [{ label: "Account", icon: User }, { label: "Billing", icon: CreditCard }] }
            ]} 
        />
      </SidebarVariantDisplay>

      <SidebarVariantDisplay 
        title="3. Sidebar Melayang"
        description="Gaya mengambang yang terpisah, cocok untuk dasbor modern."
        code={`import { AppSidebar } from "uts-ds";
import { Square, Play, User } from "lucide-react";

export default function MyFloatingLayout() {
  return (
    <div style={{ background: "#f3f4f6", height: "100vh", padding: "1rem" }}>
      <AppSidebar 
        variant="floating" 
        title="App" 
        items={[
            { label: "Dashboard", icon: Square }, 
            { label: "Messages", icon: Play },
            { label: "Profile", icon: User }
        ]} 
      />
    </div>
  );
}`}
      >
         <AppSidebar 
            variant="floating" 
            title="App" 
            items={[
                { label: "Dashboard", icon: Square }, 
                { label: "Messages", icon: Play },
                { label: "Profile", icon: User }
            ]} 
         />
      </SidebarVariantDisplay>

    </ShowcaseContainer>
  );
}
