import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GlobalCuriosityMap = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default to London

  const handlePostQuestion = () => {
    setAnswers([...answers, { question, location: userLocation }]);
    setQuestion('');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Global Curiosity Map
      </Typography>

      {/* Question Input */}
      <TextField
        fullWidth
        label="Ask a Question"
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handlePostQuestion}>Post Question</Button>

      {/* Map to show answers */}
      <Box sx={{ mt: 4 }}>
        <MapContainer center={userLocation} zoom={3} style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {answers.map((answer, index) => (
            <Marker key={index} position={answer.location}>
              <Popup>{answer.question}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default GlobalCuriosityMap;
