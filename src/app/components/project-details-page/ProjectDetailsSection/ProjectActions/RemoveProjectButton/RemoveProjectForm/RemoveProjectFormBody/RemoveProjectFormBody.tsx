import Box from '@mui/material/Box';
import React, { ChangeEvent, useCallback, useState } from 'react';

interface ChildrenProps {
  projectNameInput: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RemoveProjectFormBody = ({
  children,
}: {
  children: (props: ChildrenProps) => React.ReactNode;
}) => {
  // Since Submit is going to need access to the input data we are going to make a controlled input.
  // and since Body wraps both of those components, we are going to house the state here.
  const [projectNameInput, setProjectNameInput] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setProjectNameInput(event.target.value);
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
      {children({ projectNameInput, handleChange })}
    </Box>
  );
};

export default RemoveProjectFormBody;
