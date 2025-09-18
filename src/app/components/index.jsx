"use client";

import React, { useState } from "react";
import { Modal, LoginForm, SignupForm } from "./auth";
import {
  ContactSection,
  Footer,
  HeroSection,
  LoginSignupSection,
  PreviewFeatures,
  SwitchModule,
} from "./main";

export default function HomePage() {
  const [mode, setMode] = useState("investor");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  const handleLogin = () => {
    setModalType("login");
    setModalOpen(true);
  };
  const handleSignup = () => {
    setModalType("signup");
    setModalOpen(true);
  };
  const handleSwitch = () => {
    setModalType(modalType === "login" ? "signup" : "login");
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <SwitchModule mode={mode} setMode={setMode} />
      <HeroSection mode={mode} />
      <PreviewFeatures />
      <LoginSignupSection onLogin={handleLogin} onSignup={handleSignup} />
      <ContactSection />
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {modalType === "login" ? (
          <LoginForm onSwitch={handleSwitch} />
        ) : (
          <SignupForm onSwitch={handleSwitch} />
        )}
      </Modal>
    </div>
  );
}
