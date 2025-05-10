// components/Drawer.jsx
"use client";
import { useRef, useEffect } from "react";

export function Drawer({ isOpen, onClose, children, direction = "right" }) {
  const drawerRef = useRef();

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionStyles = {
    right: "right-0 top-0 ",
    left: "left-0 top-0 h-full",
    bottom: "bottom-0 left-0 w-full",
    top: "top-0 left-0 w-full",
  };

  const transitionStyles = {
    right: "translate-x-full",
    left: "-translate-x-full",
    bottom: "translate-y-full",
    top: "-translate-y-full",
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed z-50 w-3/4 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          positionStyles[direction]
        } ${
          isOpen ? "translate-x-0 translate-y-0" : transitionStyles[direction]
        }`}
      >
        {children}
      </div>
    </>
  );
}
