"use client";
import React, { useState } from 'react';
import styled from "styled-components";
import { Copy, Check, Code as CodeIcon, Save, Trash2, Edit } from "lucide-react";

// =============================================================================
// REUSABLE BUTTON COMPONENT
// =============================================================================

const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => props.$bg || "#4f46e5"};
  color: ${(props) => props.$color || "white"};
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) => props.$radius || "8px"};
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  &:hover {
    background-color: ${(props) => props.$hoverBg || props.$bg};
    filter: brightness(110%);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function Button({
  label,
  children,
  onClick,
  bg,
  hoverBg,
  color,
  border,
  radius,
  icon: Icon
}) {
  return (
    <StyledButton 
      onClick={onClick} 
      $bg={bg} 
      $hoverBg={hoverBg}
      $color={color}
      $border={border}
      $radius={radius}
    >
      {Icon && <Icon size={18} />}
      {label || children}
    </StyledButton>
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
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
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

function ButtonVariantDisplay({ title, code, children }) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>{title}</h3>
            <ShowcaseBlock>
                <PreviewArea>
                    {children}
                </PreviewArea>
                <ActionSelect>
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

export function ButtonShowcase() {
  return (
    <ShowcaseContainer>
      <Title>Button Component Variants</Title>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Komponen tombol yang dapat disesuaikan. Copy kodenya untuk menggunakan.
      </p>

      <ButtonVariantDisplay 
        title="Primary Blue"
        code={`<Button label="Save Changes" bg="#4f46e5" icon={Save} />`}
      >
        <Button label="Save Changes" bg="#4f46e5" icon={Save} />
      </ButtonVariantDisplay>

      <ButtonVariantDisplay 
        title="Danger Red"
        code={`<Button 
  label="Delete Item" 
  bg="#ef4444" 
  hoverBg="#dc2626" 
  icon={Trash2} 
/>`}
      >
        <Button label="Delete Item" bg="#ef4444" hoverBg="#dc2626" icon={Trash2} />
      </ButtonVariantDisplay>

      <ButtonVariantDisplay 
        title="Outline / Secondary"
        code={`<Button 
  label="Edit Profile" 
  bg="transparent" 
  color="#4f46e5" 
  border="2px solid #4f46e5" 
  hoverBg="#eef2ff" 
  icon={Edit} 
/>`}
      >
        <Button 
            label="Edit Profile" 
            bg="transparent" 
            color="#4f46e5" 
            border="2px solid #4f46e5" 
            hoverBg="#eef2ff"
            icon={Edit}
        />
      </ButtonVariantDisplay>

    </ShowcaseContainer>
  );
}

export default function AppButton(props) {
    // If no props are passed or just child props that imply showcase context in docs (this is heuristic), 
    // but better to rely on explicit usage. 
    // However, to mimic Header pattern, the default export is the Reusable Component 
    // BUT we might want to default export the Component for standard usage.
    
    return <Button {...props} />;
}
