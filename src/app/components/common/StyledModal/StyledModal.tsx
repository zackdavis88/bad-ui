import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const TRANSITION_TIME_IN_MS = 200;

const OuterContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      maxWidth="sm"
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        paddingX: 3,
      }}
    >
      {children}
    </Box>
  );
};

const InnerContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        boxShadow: 24,
      }}
    >
      {children}
    </Box>
  );
};

const StyledModal = ({
  children,
  handleClose,
  isOpen,
  ariaLabelledBy,
  ariaDescribedBy,
}: {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  ariaLabelledBy: string;
  ariaDescribedBy: string;
}) => {
  return (
    <Modal
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: TRANSITION_TIME_IN_MS,
        },
      }}
    >
      <OuterContentWrapper>
        <InnerContentWrapper>
          <Fade in={isOpen} timeout={TRANSITION_TIME_IN_MS}>
            <div>{children}</div>
          </Fade>
        </InnerContentWrapper>
      </OuterContentWrapper>
    </Modal>
  );
};

export default StyledModal;
