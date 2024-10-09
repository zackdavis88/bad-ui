'use client';
import { usePathname } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';

export type AlertType = 'info' | 'success' | 'warning' | 'error' | undefined;

interface AlerBarState {
  isOpen: boolean;
  message: string | undefined;
  type: AlertType;
  setMessage: (value: string | undefined) => void;
  setType: (value: AlertType) => void;
}

const initialState: AlerBarState = {
  isOpen: false,
  message: undefined,
  type: undefined,
  setMessage: () => {},
  setType: () => {},
};

export const AlertBarContext = createContext(initialState);

function AlertBarProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(initialState.message);
  const [type, setType] = useState(initialState.type);

  useEffect(() => {
    if (isOpen && message) {
      setIsOpen(false);
      setMessage(undefined);
      setType(undefined);
    } else if (!isOpen && message) {
      setIsOpen(true);
    }
  }, [pathname]);

  const providerValues = {
    isOpen,
    message,
    type,
    setMessage: (value: string | undefined) => {
      setMessage(value);
    },
    setType: (value: AlertType) => {
      setType(value);
    },
    setIsOpen: (value: boolean) => {
      setIsOpen(value);
    },
  };
  return <AlertBarContext.Provider value={providerValues}>{children}</AlertBarContext.Provider>;
}

export default AlertBarProvider;
