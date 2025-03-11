"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "@/components/Modal";

interface ModalContextType {
  openModal: (content: ReactNode, title: string, footer?: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalFooter, setModalFooter] = useState<ReactNode>(null);

  const openModal = (content: ReactNode, title: string, footer?: ReactNode) => {
    setModalContent(content);
    setModalTitle(title);
    setModalFooter(footer);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle("");
    setModalFooter(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalTitle}
        footer={modalFooter}
      >
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
