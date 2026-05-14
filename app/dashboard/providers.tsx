'use client';

import { ModalProvider } from '@/app/context/ModalContext';
import { ThemeProvider } from '../context/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ThemeProvider>
    );
}