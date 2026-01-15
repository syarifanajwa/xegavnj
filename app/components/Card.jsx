"use client";
import styled, { css } from "styled-components";
import React, { useState } from "react";
import { Copy, Check, Code as CodeIcon, Clock, ArrowRight, Heart } from "lucide-react";

// =============================================================================
// REUSABLE CARD COMPONENT
// =============================================================================

const CardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  /* Basic Variant */
  ${props => props.$variant === 'basic' && css`
    width: 300px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 4px solid #6366f1;
  `}

  /* Image Variant */
  ${props => props.$variant === 'image' && css`
    width: 320px;
    display: flex;
    flex-direction: column;
  `}

  /* Horizontal Variant */
  ${props => props.$variant === 'horizontal' && css`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1.5rem;
    
    @media (max-width: 480px) {
        flex-direction: column;
    }
  `}
`;

const CardImage = styled.img`
  object-fit: cover;

  ${props => props.$variant === 'image' && css`
    width: 100%;
    height: 180px;
  `}

  ${props => props.$variant === 'horizontal' && css`
    width: 120px;
    height: 120px;
    border-radius: 8px;
  `}
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  
  ${props => props.$variant === 'image' && css`
    padding: 1.5rem;
    gap: 0.8rem;
  `}

  ${props => props.$variant === 'horizontal' && css`
    flex: 1;
    gap: 0.5rem;
  `}
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #9ca3af;
  margin-top: 0.5rem;
`;

const CardAction = styled.button`
  margin-top: auto;
  padding: 0.6rem 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }

  ${props => props.$outline && css`
    background-color: transparent;
    color: #4f46e5;
    border: 1px solid #4f46e5;

    &:hover {
        background-color: #eef2ff;
    }
  `}
`;

export function Card({
  variant = 'basic',
  title,
  description,
  image,
  meta,
  buttonLabel,
  onButtonClick,
  outlineButton = false
}) {
  const isHorizontal = variant === 'horizontal';

  return (
    <CardWrapper $variant={variant}>
      {/* For Image/Horizontal variants, render image first if present */}
      {(variant === 'image' || variant === 'horizontal') && image && (
        <CardImage src={image} alt={title} $variant={variant} />
      )}

      {variant === 'basic' && (
         <>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            {meta && <CardMeta><Clock size={16} /> {meta}</CardMeta>}
            {buttonLabel && (
                <CardAction onClick={onButtonClick} $outline={outlineButton}>
                    {buttonLabel} <ArrowRight size={16} />
                </CardAction>
            )}
         </>
      )}

      {(variant === 'image' || variant === 'horizontal') && (
        <CardBody $variant={variant}>
           <CardTitle>{title}</CardTitle>
           <CardText>{description}</CardText>
           {meta && <CardMeta><Clock size={16} /> {meta}</CardMeta>}
           
           {buttonLabel && (
               <div style={{ marginTop: '0.5rem' }}>
                    <CardAction onClick={onButtonClick} $outline={outlineButton}>
                        {buttonLabel}
                    </CardAction>
               </div>
           )}
        </CardBody>
      )}
    </CardWrapper>
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
  align-items: center;
  background-color: #f3f4f6;
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

function CardVariantDisplay({ title, code, children }) {
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

export function CardShowcase() {
  return (
    <ShowcaseContainer>
      <Title>Card Variants</Title>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Komponen kartu serbaguna untuk berbagai kebutuhan konten.
      </p>

      <CardVariantDisplay 
        title="1. Kartu Dasar (Teks Saja)"
        code={`<Card 
  variant="basic"
  title="Promo Mingguan" 
  description="Dapatkan diskon 20% untuk semua menu pasta setiap hari Jumat. Jangan lewatkan kesempatan ini!"
  buttonLabel="Lihat Menu"
  meta="Berakhir dalam 2 hari"
/>`}
      >
        <Card 
            variant="basic"
            title="Promo Mingguan" 
            description="Dapatkan diskon 20% untuk semua menu pasta setiap hari Jumat. Jangan lewatkan kesempatan ini!"
            buttonLabel="Lihat Menu"
            meta="Berakhir dalam 2 hari"
        />
      </CardVariantDisplay>

      <CardVariantDisplay 
        title="2. Kartu dengan Gambar"
        code={`<Card 
  variant="image"
  image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  title="Nasi Goreng Spesial" 
  description="Nasi goreng kampung dengan bumbu rahasia, dilengkapi telur mata sapi dan sate ayam."
  buttonLabel="Pesan Sekarang"
  outlineButton={true}
/>`}
      >
        <Card 
            variant="image"
            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
            title="Nasi Goreng Spesial" 
            description="Nasi goreng kampung dengan bumbu rahasia, dilengkapi telur mata sapi dan sate ayam."
            buttonLabel="Pesan Sekarang"
            outlineButton={true}
        />
      </CardVariantDisplay>

      <CardVariantDisplay 
        title="3. Kartu Horizontal"
        code={`<Card 
  variant="horizontal"
  image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  title="Paket Katering" 
  description="Layanan katering untuk acara kantor dan pesta keluarga."
  buttonLabel="Hubungi Kami"
/>`}
      >
        <Card 
            variant="horizontal"
            image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=200&q=80"
            title="Paket Katering" 
            description="Layanan katering untuk acara kantor dan pesta keluarga."
            buttonLabel="Hubungi Kami"
        />
      </CardVariantDisplay>

    </ShowcaseContainer>
  );
}

// Support legacy imports or default usage
export default function AppCard(props) {
    if (props.variant) {
        return <Card {...props} />;
    }
    // Backward compatibility wrapper for old props
    return <Card variant="image" {...props} />;
}
