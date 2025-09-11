import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Sample data representing images, quotes, and music links
const initialItems = [
  {
    id: '1',
    type: 'image',
    content: 'https://via.placeholder.com/150?text=Image+1',
  },
  {
    id: '2',
    type: 'quote',
    content: '“The only way to do great work is to love what you do.” – Steve Jobs',
  },
  {
    id: '3',
    type: 'music',
    content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Example audio link
  },
  {
    id: '4',
    type: 'image',
    content: 'https://via.placeholder.com/150?text=Image+2',
  },
  {
    id: '5',
    type: 'quote',
    content: '“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill',
  },
];

const Moodboard = () => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState({ type: 'image', content: '' });

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removed);

    setItems(reorderedItems);
  };

  const handleAddItem = () => {
    if (newItem.content) {
      setItems([...items, { id: `${items.length + 1}`, ...newItem }]);
      setNewItem({ type: 'image', content: '' });
    }
  };

  const renderContent = (item) => {
    switch (item.type) {
      case 'image':
        return <img src={item.content} alt="Inspiration" style={{ width: '100%', borderRadius: '5px' }} />;
      case 'quote':
        return <Typography variant="body1" color="text.secondary" style={{ fontStyle: 'italic' }}>{item.content}</Typography>;
      case 'music':
        return (
          <audio controls>
            <source src={item.content} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Virtual Moodboard - Collect Inspiration
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Add new item section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, p: 2 }}>
            <CardContent>
              <TextField
                label="Add Image URL or Quote"
                fullWidth
                value={newItem.content}
                onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                onClick={handleAddItem}
                sx={{ width: '100%', marginTop: 2 }}
              >
                Add Item
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Moodboard with draggable items */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="moodboard" direction="horizontal">
            {(provided) => (
              <Grid
                container
                spacing={4}
                justifyContent="center"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Grid item xs={12} sm={6} md={4} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card sx={{ height: '100%', boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
                          <CardContent>
                            <Typography variant="h6" fontWeight="medium" gutterBottom>
                              {item.type === 'image' ? 'Image' : item.type === 'quote' ? 'Quote' : 'Music'}
                            </Typography>
                            {renderContent(item)}
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Box>
  );
};

export default Moodboard;
