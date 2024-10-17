'use client';
import { usePathname } from 'next/navigation';
import { createContext, useState, useEffect, useCallback } from 'react';
import { AlertProps } from '@mui/material/Alert';

interface AlertBarState {
  isOpen: boolean;
  message: string | undefined;
  type: AlertProps['severity'];
  handleOpen: ({
    message,
    type,
    openImmediately,
  }: {
    message: string;
    type: AlertProps['severity'];
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
    if (isOpen && message) {
      setIsOpen(false);
      setMessage(undefined);
      setType(undefined);
    } else if (!isOpen && message) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
