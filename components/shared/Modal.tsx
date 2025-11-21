"use client";

import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  overlayClassName?: string; // styles for the overlay
  modalClassName?: string;   // styles for the modal container
  closeBtnClassName?: string; // styles for the close button
}

export default function Modal({
  children,
  isOpen,
  onClose,
  overlayClassName,
  modalClassName,
  closeBtnClassName,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={overlayClassName} onClick={onClose}>
      <div
        className={modalClassName}
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} className={closeBtnClassName}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
