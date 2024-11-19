'use client';
import { useState, useCallback, ChangeEvent } from 'react';
import Markdown from 'react-markdown';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// TODO: DELETE THIS FILE
const TestingMarkdown = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [detailsInput, setDetailsInput] = useState('');

  const handleDetailsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDetailsInput(event.target.value);
  }, []);

  const togglePreview = useCallback(() => {
    if (showPreview) {
      setShowPreview(false);
    } else {
      setShowPreview(true);
    }
  }, [showPreview]);

  return (
    <Box sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}>
      <Button variant="contained" sx={{ marginBottom: 2 }} onClick={togglePreview}>
        {showPreview ? 'Show Editor' : 'Show Preview'}
      </Button>
      {!showPreview && (
        <TextField
          id="details-input"
          label="Details"
          variant="outlined"
          color="primary"
          name="details"
          fullWidth
          multiline
          rows={25}
          value={detailsInput}
          onChange={handleDetailsChange}
        />
      )}
      {showPreview && <Markdown>{detailsInput}</Markdown>}
    </Box>
  );
};

export default TestingMarkdown;
