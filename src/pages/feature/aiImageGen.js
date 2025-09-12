import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Paper,
  Card,
  CardContent
} from '@mui/material';

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt) {
      alert('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/genaiimg/generate-image',
        { prompt }
      );

      // Backend returns relative URL like /uploads/123456.png
      // Prepend server host to display it
      setImageUrl(`http://localhost:5000${response.data.imageUrl}`);
    } catch (err) {
      console.error(err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px'
      }}
    >
      <Paper
        sx={{
          padding: '30px',
          borderRadius: '12px',
          boxShadow: 3,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#fff'
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          textAlign="center"
          sx={{ color: '#4a90e2' }}
        >
          AI Image Generator
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ marginBottom: '20px' }}
        >
          Enter a description and let AI generate an image for you!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter Image Prompt"
            variant="outlined"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#4a90e2',
              color: '#fff',
              padding: '12px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#357ab7'
              }
            }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Generate Image'
            )}
          </Button>
        </form>

        {error && (
          <Typography
            variant="body2"
            color="error"
            sx={{ marginTop: '20px', textAlign: 'center' }}
          >
            {error}
          </Typography>
        )}

        {imageUrl && (
          <Box
            sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
          >
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={imageUrl}
                  alt="Generated"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </CardContent>
            </Card>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default AIImageGenerator;
