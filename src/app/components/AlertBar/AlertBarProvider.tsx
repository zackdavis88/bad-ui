'use client';
import { usePathname } from 'next/navigation';
import { createContext, useState, useEffect, useCallback } from 'react';

export type AlertType = 'info' | 'success' | 'warning' | 'error' | undefined;

interface AlertBarState {
  isOpen: boolean;
  message: string | undefined;
  type: AlertType;
  handleOpen: ({
    message,
    type,
    openImmediately,
  }: {
    message: string;
    type: AlertType;
    openImmediately?: boolean;
  }) => void;
  handleClose: () => void;
}

const initialState: AlertBarState = {
  isOpen: false,
  message: undefined,
  type: undefined,
  handleOpen: () => {},
  handleClose: () => {},
};

export const AlertBarContext = createContext(initialState);

function AlertBarProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(initialState.message);
  const [type, setType] = useState(initialState.type);

  const handleOpen: AlertBarState['handleOpen'] = useCallback(
    ({ message, type, openImmediately }) => {
      setMessage(message);
      setType(type);
      if (openImmediately) {
        setIsOpen(true);
      }
    },
    []
  );

  const handleClose: AlertBarState['handleClose'] = useCallback(() => {
    setIsOpen(false);
    setMessage(undefined);
    setType(undefined);
  }, []);

  // Close or show the navbar on route change.
  useEffect(() => {
    const openOrCloseAlertBar = (callback: () => void) => {
      setTimeout(callback, 200);
    };

    if (isOpen && message) {
      openOrCloseAlertBar(() => {
        setIsOpen(false);
        setMessage(undefined);
        setType(undefined);
      });
    } else if (!isOpen && message) {
      openOrCloseAlertBar(() => {
        setIsOpen(true);
      });
    }
  }, [pathname]);

  const providerValues = {
    isOpen,
    message,
    type,
    handleOpen,
    handleClose,
  };
  return <AlertBarContext.Provider value={providerValues}>{children}</AlertBarContext.Provider>;
}

export default AlertBarProvider;
