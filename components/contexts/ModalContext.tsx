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
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]"
        // Updated styling for better readability of large content
        modalClassName="bg-white rounded-xl shadow-2xl w-full max-w-5xl relative max-h-[90vh] flex flex-col mx-4"
        closeBtnClassName="absolute top-4 right-4 z-50 p-2 bg-white/80 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
      >
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};