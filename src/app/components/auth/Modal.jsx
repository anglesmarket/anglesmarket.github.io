"use client";
import React from "react";

import { useRef } from "react";

export function Modal({ open, onClose, children }) {
  const modalRef = useRef(null);
  if (!open) return null;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleBackdropClick}
      ref={modalRef}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 min-w-[320px] max-w-md w-full animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
