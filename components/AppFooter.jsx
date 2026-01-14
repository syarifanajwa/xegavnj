"use client";
import { useState } from 'react';
import styled, { css } from "styled-components";
import { Copy, Check, Code as CodeIcon, Twitter, Facebook, Instagram } from "lucide-react";

// =============================================================================
// REUSABLE FOOTER COMPONENT
// =============================================================================

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem;
  transition: all 0.3s ease;
  
  /* Primary Variant */
  ${props => props.$variant === 'primary' && css`
    background-color: #6366f1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}

  /* Dark Variant */
  ${props => props.$variant === 'dark' && css`
    background-color: #111827;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3rem 2rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 2rem;
    }
  `}

  /* Split Variant */
  ${props => props.$variant === 'split' && css`
    background: linear-gradient(to right, #8b5cf6, #d946ef);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
  `}
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  
  svg {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;
    &:hover { opacity: 1; }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.9;
    &:hover { text-decoration: underline; opacity: 1; }
  }
`;

export function Footer({ 
  variant = 'primary', 
  copyright = '© 2025 Company. All rights reserved.',
  socials = false,
  links = []
}) {
  return (
    <FooterWrapper $variant={variant}>
      <Copyright>{copyright}</Copyright>
      
      {variant === 'dark' && socials && (
        <Socials>
            <Twitter size={20} />
            <Facebook size={20} />
            <Instagram size={20} />
        </Socials>
      )}

      {variant === 'split' && links.length > 0 && (
        <FooterLinks>
            {links.map((link, idx) => (
                <a key={idx} href={link.href}>{link.label}</a>
            ))}
        </FooterLinks>
      )}
    </FooterWrapper>
  );
}


// =============================================================================
// SHOWCASE & DOCUMENTATION WRAPPER
// =============================================================================

const ShowcaseContainer = styled.div`
  width: 100%;
  padding: 2rem 0; /* Removed horizontal padding to allow full width appearance in constrained container */
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
  margin-bottom: 2rem;
  font-weight: 800;
`;

const FooterDisplayWrapper = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const CodeControlBar = styled.div`
    display: flex;
    justify-content: center; /* Center the button for footer style */
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
  max-width: 800px; /* Constrain code block width */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

function FooterVariantDisplay({ title, code, children }) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <FooterDisplayWrapper>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>{title}</h3>
            
            {/* Direct Children Render - No Card Wrapper */}
            <div style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                {children}
            </div>

            <CodeControlBar>
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
            </CodeControlBar>
            
            {showCode && (
                <CodeBlock>
                    <pre>{code}</pre>
                </CodeBlock>
            )}
        </FooterDisplayWrapper>
    );
}

export function FooterShowcase() {
  return (
    <ShowcaseContainer>
      <Title>Komponen Footer</Title>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Pilih varian Footer di bawah ini ✨
      </p>

      <FooterVariantDisplay 
        title="Primary Footer"
        code={`<Footer 
  variant="primary" 
  copyright="© 2025 DapoerRasa. All rights reserved." 
/>`}
      >
        <Footer variant="primary" copyright="© 2025 DapoerRasa. All rights reserved." />
      </FooterVariantDisplay>

      <FooterVariantDisplay 
        title="Dark Footer (dengan ikon media sosial)"
        code={`<Footer 
  variant="dark" 
  copyright="© 2025 DapoerRasa" 
  socials={true} 
/>`}
      >
        <Footer variant="dark" copyright="© 2025 DapoerRasa" socials={true} />
      </FooterVariantDisplay>

      <FooterVariantDisplay 
        title="Split Footer (dengan link tambahan)"
        code={`<Footer 
  variant="split" 
  copyright="© 2025 DapoerRasa" 
  links={[
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Support", href: "#" }
  ]} 
/>`}
      >
        <Footer 
            variant="split" 
            copyright="© 2025 DapoerRasa" 
            links={[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Support", href: "#" }
            ]} 
        />
      </FooterVariantDisplay>

    </ShowcaseContainer>
  );
}

/**
 * Default Export: Generic Reusable Footer
 */
export default function AppFooter(props) {
    const defaultCopyright = "© 2025 DapoerRasa. All rights reserved.";
    return <Footer copyright={defaultCopyright} {...props} />;
}
