'use client';
import { ChangeEvent, useState, useCallback } from 'react';
import Box from '@mui/material/Box';

const RemoveMembershipFormBody = ({
  children,
}: {
  children: ({
    confirmIsChecked,
    handleChange,
  }: {
    confirmIsChecked: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }) => React.ReactNode;
}) => {
  const [confirmIsChecked, setConfirmIsChecked] = useState(false);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setConfirmIsChecked(event.target.checked);
  }, []);

  return (
    <Box
      sx={{
        padding: 2,
        border: '1px solid',
        borderColor: 'error.main',
        borderTop: 'none',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children({ confirmIsChecked, handleChange })}
    </Box>
  );
};

export default RemoveMembershipFormBody;
