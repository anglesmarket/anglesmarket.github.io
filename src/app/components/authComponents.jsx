"use client";

import React, { useState } from "react";

const paleColors = {
  investor: "#e3f2fd",
  startup: "#f1f8e9",
  accent: "#90caf9",
  text: "#212121",
  card: "#ffffff",
};

export function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: paleColors.card,
          borderRadius: 12,
          boxShadow: "0 2px 16px #bbb",
          padding: 32,
          minWidth: 320,
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#888",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export function LoginForm({ onSwitch }) {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2 style={{ color: paleColors.text }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{
          background: paleColors.accent,
          color: paleColors.text,
          border: "none",
          borderRadius: 8,
          padding: "10px 0",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Login
      </button>
      <span style={{ fontSize: 14, color: "#888", textAlign: "center" }}>
        Don't have an account?{" "}
        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            color: paleColors.accent,
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={onSwitch}
        >
          Sign Up
        </button>
      </span>
    </form>
  );
}

export function SignupForm({ onSwitch }) {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2 style={{ color: paleColors.text }}>Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{
          background: paleColors.accent,
          color: paleColors.text,
          border: "none",
          borderRadius: 8,
          padding: "10px 0",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
      <span style={{ fontSize: 14, color: "#888", textAlign: "center" }}>
        Already have an account?{" "}
        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            color: paleColors.accent,
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={onSwitch}
        >
          Login
        </button>
      </span>
    </form>
  );
}
