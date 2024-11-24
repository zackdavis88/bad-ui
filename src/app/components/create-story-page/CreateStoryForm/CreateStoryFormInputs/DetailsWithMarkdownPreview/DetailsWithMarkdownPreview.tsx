'use client';
import { ChangeEvent, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Markdown from 'react-markdown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const DetailsWithMarkdownPreview = () => {
  const [detailsInput, setDetailsInput] = useState('');
  const [previewIsVisible, setPreviewIsVisible] = useState(false);

  const togglePreview = useCallback(() => {
    if (previewIsVisible) {
      setPreviewIsVisible(false);
    } else {
      setPreviewIsVisible(true);
    }
  }, [previewIsVisible]);

  const handleDetailsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDetailsInput(event.target.value);
  }, []);

  return (
    <>
      <Button
        onClick={togglePreview}
        variant="contained"
        disabled={!detailsInput}
        sx={{ marginBottom: 2 }}
      >
        <Box component="span" display="flex" marginRight={1}>
          {previewIsVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </Box>
        {previewIsVisible ? 'Hide' : 'Show'} Preview
      </Button>
      {!previewIsVisible && (
        <TextField
          id="details-input"
          label="Details"
          variant="outlined"
          name="details"
          multiline
          minRows={10}
          maxRows={10}
          fullWidth
          onChange={handleDetailsChange}
          value={detailsInput}
        />
      )}
      {previewIsVisible && (
        <Box minHeight="265px">
          <Markdown>{detailsInput}</Markdown>
        </Box>
      )}
    </>
  );
};

export default DetailsWithMarkdownPreview;
