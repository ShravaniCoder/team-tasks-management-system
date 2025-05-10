// components/Popover.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export function Popover({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export function PopoverTrigger({ children, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="focus:outline-none"
    >
      {children}
    </div>
  );
}

export function PopoverContent({
  children,
  isOpen,
  setIsOpen,
  className = "",
}) {
  const ref = useRef();

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={`absolute z-50 mt-2 w-72 rounded-md border bg-white p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
