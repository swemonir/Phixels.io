"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type FlowType = "book-call" | "start-project" | "timeout";

interface PopupContextType {
  isOpen: boolean;
  flowType: FlowType;
  openPopup: (flow?: FlowType) => void;
  closePopup: () => void;
  setFlowType: (flow: FlowType) => void;
  resetPopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flowType, setFlowType] = useState<FlowType>("timeout");

  const openPopup = (flow: FlowType = "timeout") => {
    setFlowType(flow);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const resetPopup = () => {
    setIsOpen(false);
    setFlowType("timeout");
  };

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        flowType,
        openPopup,
        closePopup,
        setFlowType,
        resetPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
