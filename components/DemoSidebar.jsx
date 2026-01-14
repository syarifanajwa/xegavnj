"use client";
import styled, { keyframes, css } from "styled-components";
import { FaHome, FaUser, FaCog, FaPhone } from "react-icons/fa";

export const DemoSidebar = ({ variant = "primary" }) => {
  return (
    <SidebarContainer $variant={variant}>
      <h3>
        {variant === "dark"
          ? "Menu Navigation"
          : variant === "outline"
          ? "Sidebar Menu"
          : variant === "slide"
          ? "Animated Sidebar"
          : "Sidebar Menu"}
      </h3>

      <SidebarList>
        <SidebarItem>{variant !== "primary" && <FaHome />} Home</SidebarItem>
        <SidebarItem>{variant !== "primary" && <FaUser />} About</SidebarItem>
        <SidebarItem>{variant !== "primary" && <FaCog />} Services</SidebarItem>
        <SidebarItem>{variant !== "primary" && <FaPhone />} Contact</SidebarItem>
      </SidebarList>

      {variant === "outline" && <ActionButton>Get in Touch</ActionButton>}
    </SidebarContainer>
  );
};

// 🎬 Animations khusus untuk varian SLIDE
const fadeSlideIn = keyframes`
  0% { transform: translateX(-40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const SidebarContainer = styled.aside`
  width: 200px;
  padding: 20px;
  border-radius: 16px;
  color: #fff;
  transition: all 0.4s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);

  ${({ $variant }) =>
    $variant === "slide"
      ? css`
          background: linear-gradient(
            120deg,
            #6548f5 0%,
            #8e6dfc 50%,
            #6548f5 100%
          );
          background-size: 300% 300%;
          animation: ${fadeSlideIn} 0.8s ease forwards,
            ${shimmer} 2.8s linear infinite;
        `
      : css`
          background: ${() =>
            $variant === "dark"
              ? "linear-gradient(180deg, #1b1a2e, #0e0d17)"
              : $variant === "outline"
              ? "linear-gradient(180deg, #2c1e6b, #402c87)"
              : "linear-gradient(180deg, #3d2d7c, #5a3ec5)"};
        `}

  h3 {
    margin-bottom: 16px;
    font-size: 1.1rem;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateX(5px);
    opacity: 0.85;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  margin-top: 18px;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: #b28aff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #a379ff;
  }
`;
