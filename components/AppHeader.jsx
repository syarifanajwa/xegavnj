"use client";
import { useState } from 'react';
import styled, { css } from "styled-components";
import { Copy, Check, Code as CodeIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeSwitcher.jsx";

// =============================================================================
// REUSABLE HEADER COMPONENT
// =============================================================================

const HeaderWrapper = styled.header`
  width: 100%;
  transition: all 0.3s ease;
  min-height: 90px; /* Ensure sufficient height */
  
  /* Primary Variant */
  ${props => props.$variant === 'primary' && css`
    background-color: #6366f1;
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `}

  /* Centered Variant */
  ${props => props.$variant === 'centered' && css`
    background-color: #1f2937;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `}

  /* Split Variant */
  ${props => props.$variant === 'split' && css`
    background: linear-gradient(to right, #8b5cf6, #d946ef);
    padding: 1.5rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

const Brand = styled.div`
  font-weight: 800;

  ${props => props.$variant === 'primary' && css`
    font-size: 1.5rem;
    color: white;
  `}

  ${props => props.$variant === 'centered' && css`
    font-size: 2rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  `}

  ${props => props.$variant === 'split' && css`
    font-size: 1.4rem;
    color: white;
  `}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  ${props => props.$variant === 'primary' && css`
    gap: 2rem;
  `}

  ${props => props.$variant === 'centered' && css`
    gap: 2.5rem;
  `}

  ${props => props.$variant === 'split' && css`
    gap: 2rem;
  `}
`;

const NavLink = styled.a`
  text-decoration: none;
  transition: all 0.2s;

  /* Primary Variant Links */
  ${props => props.$variant === 'primary' && css`
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
    opacity: 0.9;
    &:hover { opacity: 1; }
  `}

  /* Centered Variant Links */
  ${props => props.$variant === 'centered' && css`
    color: white; /* Gray-300 */
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    opacity: 0.8;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background: #fbbf24;
        bottom: -4px;
        left: 0;
        transition: width 0.3s ease;
    }
    &:hover { opacity: 1; }
    &:hover::after { width: 100%; }
  `}

  /* Split Variant Links */
  ${props => props.$variant === 'split' && css`
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    &:hover { text-decoration: underline; }
  `}
`;

const CtaButton = styled.button`
  border: none;
  cursor: pointer;
  
  ${props => props.$variant === 'split' && css`
    background: white;
    color: #9333ea;
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
  `}
`;

const ToggleBtn = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  margin-left: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

/**
 * Reusable Header Component
 */
export function Header({ 
  variant = 'primary', 
  logo = 'DapoerRasa', 
  menuItems = [], 
  ctaLabel, 
  onCtaClick,
  showThemeToggle = true
}) {
  const { theme, setTheme } = useTheme() || {}; // Handle safe access

  const toggleTheme = () => {
     if (setTheme) {
        setTheme(theme === 'light' ? 'dark' : 'light');
     } else {
         console.warn("ThemeProvider not found. Theme toggle disabled.");
     }
  };

  return (
    <HeaderWrapper $variant={variant}>
      <Brand $variant={variant}>{logo}</Brand>
      
      <Nav $variant={variant}>
        {menuItems.map((item, index) => (
          <NavLink key={index} href={item.href} $variant={variant}>
            {item.label}
          </NavLink>
        ))}
        
        {/* Theme Toggle Switch */}
        {showThemeToggle && (
            <ToggleBtn onClick={toggleTheme} title="Toggle Theme">
                {theme === 'dark' ? <Moon /> : <Sun />}
            </ToggleBtn>
        )}
      </Nav>

      {variant === 'split' && ctaLabel && (
        <CtaButton $variant={variant} onClick={onCtaClick}>
          {ctaLabel}
        </CtaButton>
      )}
    </HeaderWrapper>
  );
}


// =============================================================================
// SHOWCASE & DOCUMENTATION WRAPPER
// =============================================================================

const ShowcaseContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const HeaderDisplayWrapper = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const CodeControlBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    margin-top: 1rem;
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
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);

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
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 800px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

function HeaderVariantDisplay({ title, code, children }) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <HeaderDisplayWrapper>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>{title}</h3>
            
            <div style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                {children}
            </div>
            
            <CodeControlBar>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <ActionButton onClick={() => setShowCode(!showCode)}>
                        <CodeIcon size={16} />
                        {showCode ? "Hide Code" : "View Use Code"}
                    </ActionButton>
                    {showCode && (
                        <ActionButton onClick={handleCopy}>
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? "Copied!" : "Copy"}
                        </ActionButton>
                    )}
                </div>
            </CodeControlBar>
            
            {showCode && (
                <CodeBlock>
                    <pre>{code}</pre>
                </CodeBlock>
            )}
        </HeaderDisplayWrapper>
    );
}

const defaultMenuItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Tentang', href: '#' },
    { label: 'Kontak', href: '#' },
];

export function HeaderShowcase() {
  return (
    <ShowcaseContainer>
      <Title>Reusable Header Component</Title>
      <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.8 }}>
        Komponen header yang fleksibel dengan props dan tema toggle.
      </p>

      <HeaderVariantDisplay 
        title="Primary Variant"
        code={`<Header 
  variant="primary" 
  logo="DapoerRasa" 
  menuItems={[
    { label: 'Beranda', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Tentang', href: '#' },
    { label: 'Kontak', href: '#' }
  ]} 
/>`}
      >
        <Header variant="primary" logo="DapoerRasa" menuItems={defaultMenuItems} showThemeToggle={false} />
      </HeaderVariantDisplay>

      <HeaderVariantDisplay 
        title="Centered Variant"
        code={`<Header 
  variant="centered" 
  logo="DapoerRasa" 
  menuItems={[
    { label: 'Beranda', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Tentang', href: '#' },
    { label: 'Kontak', href: '#' }
  ]} 
/>`}
      >
        <Header variant="centered" logo="DapoerRasa" menuItems={defaultMenuItems} showThemeToggle={false} />
      </HeaderVariantDisplay>

      <HeaderVariantDisplay 
        title="Split Variant"
        code={`<Header 
  variant="split" 
  logo="DapoerRasa" 
  ctaLabel="Order Now"
  menuItems={[
    { label: 'Beranda', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Tentang', href: '#' },
    { label: 'Kontak', href: '#' }
  ]} 
/>`}
      >
        <Header variant="split" logo="DapoerRasa" menuItems={defaultMenuItems} ctaLabel="Order Now" showThemeToggle={false} />
      </HeaderVariantDisplay>

    </ShowcaseContainer>
  );
}

export default function AppHeader(props) {
    const items = props.menuItems || defaultMenuItems;
    return <Header {...props} menuItems={items} />;
}
