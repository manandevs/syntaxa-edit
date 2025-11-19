"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import Modal from '@/components/shared/Modal';

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* The Modal is now rendered here, globally, controlled by this provider */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        modalClassName="bg-white p-6 rounded-lg max-w-lg w-full relative"
        closeBtnClassName="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
      >
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};