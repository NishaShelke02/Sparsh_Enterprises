// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatApp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919021176438" // 🟢 your WhatsApp number here with country code
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
