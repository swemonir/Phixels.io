"use client";

import React, { useState, createContext, useContext } from "react";
import LeadPopup from "@/components/layout/LeadPopup";

interface ServicePopupContextType {
  openServicePopup: () => void;
}

const ServicePopupContext = createContext<ServicePopupContextType | undefined>(
  undefined
);

export const useServicePopup = () => {
  const context = useContext(ServicePopupContext);
  if (!context) {
    throw new Error("useServicePopup must be used within a LeadPopupWrapper");
  }
  return context;
};

export default function ServicePopupWrapper({
  children,
  serviceName,
}: {
  children: React.ReactNode;
  serviceName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ServicePopupContext.Provider
      value={{ openServicePopup: () => setIsOpen(true) }}
    >
      {children}
      <LeadPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceName={serviceName}
      />
    </ServicePopupContext.Provider>
  );
}
