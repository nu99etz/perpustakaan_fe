'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ModalOptions {
    title: string;
    subtitle?: string;
    maxWidth?: string;
    onConfirm?: () => void;
}

interface ModalContextType {
    isOpen: boolean;
    isClosing: boolean;
    options: ModalOptions | null;
    content: ReactNode | null;
    openModal: (content: ReactNode, options: ModalOptions) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);
    const [options, setOptions] = useState<ModalOptions | null>(null);

    const openModal = useCallback((content: ReactNode, options: ModalOptions) => {
        setContent(content);
        setOptions(options);
        setIsClosing(false);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            setContent(null);
            setOptions(null);
        }, 200);
    }, []);

    return (
        <ModalContext.Provider value={{ isOpen, isClosing, options, content, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within a ModalProvider');
    return context;
}
