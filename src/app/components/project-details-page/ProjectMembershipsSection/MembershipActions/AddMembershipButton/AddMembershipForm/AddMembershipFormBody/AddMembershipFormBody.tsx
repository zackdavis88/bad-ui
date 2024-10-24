'use client';
import { useCallback, useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import { fetchUser } from '@/app/data/fetchers/fetchUser';

interface AddMembershipFormState {
  usernameInput: string;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onUsernameBlur: () => void;
  userLookUpStatus: 'found' | 'notFound' | undefined;
  userLookUpMessage: string | undefined;
}

const AddMembershipFormBody = ({
  children,
}: {
  children: (props: AddMembershipFormState) => React.ReactNode;
}) => {
  const [usernameInput, setUsernameInput] = useState<AddMembershipFormState['usernameInput']>('');
  const [lookUpUsername, setLookUpUsername] = useState('');
  const [userLookUpStatus, setUserLookUpStatus] =
    useState<AddMembershipFormState['userLookUpStatus']>(undefined);
  const [userLookUpMessage, setUserLookUpMessage] =
    useState<AddMembershipFormState['userLookUpMessage']>(undefined);

  const onUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
    setLookUpUsername('');
    setUserLookUpStatus(undefined);
    setUserLookUpMessage(undefined);
  }, []);

  const onUsernameBlur = useCallback(async () => {
    if (usernameInput && usernameInput.toLowerCase() !== lookUpUsername.toLowerCase()) {
      try {
        const { message } = await fetchUser(usernameInput);
        setUserLookUpStatus('found');
        setUserLookUpMessage(message);
      } catch (error) {
        if (error instanceof Error) {
          setUserLookUpStatus('notFound');
          setUserLookUpMessage('User not found');
        }
      } finally {
        setLookUpUsername(usernameInput);
      }
    }
  }, [usernameInput, lookUpUsername]);

  return (
    <Box
      sx={{
        padding: 2,
        border: '1px solid',
        borderColor: 'primary.main',
        borderTop: 'none',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children({
        usernameInput,
        userLookUpStatus,
        userLookUpMessage,
        onUsernameChange,
        onUsernameBlur,
      })}
    </Box>
  );
};

export default AddMembershipFormBody;
