import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Sample initial data
const initialItems = [
  { id: '1', type: 'image', content: 'https://via.placeholder.com/150?text=Image+1' },
  { id: '2', type: 'quote', content: '“The only way to do great work is to love what you do.” – Steve Jobs' },
  { id: '3', type: 'music', content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: '4', type: 'image', content: 'https://via.placeholder.com/150?text=Image+2' },
  { id: '5', type: 'quote', content: '“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill' },
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
    if (!newItem.content.trim()) return;

    setItems([...items, { id: (items.length + 1).toString(), ...newItem }]);
    setNewItem({ type: 'image', content: '' });
  };

  const renderContent = (item) => {
    switch (item.type) {
      case 'image':
        return <img src={item.content} alt="Inspiration" className="img-fluid rounded" />;
      case 'quote':
        return <blockquote className="blockquote"><p>{item.content}</p></blockquote>;
      case 'music':
        return (
          <audio controls className="w-100">
            <source src={item.content} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <h2 className="text-center mb-4">Virtual Moodboard - Collect Inspiration</h2>

      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <div className="mb-3">
              <label htmlFor="itemContent" className="form-label">Add Image URL, Quote or Music Link</label>
              <input
                type="text"
                id="itemContent"
                className="form-control"
                value={newItem.content}
                onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                placeholder="Enter content URL or quote text"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="itemType" className="form-label">Type</label>
              <select
                id="itemType"
                className="form-select"
                value={newItem.type}
                onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              >
                <option value="image">Image</option>
                <option value="quote">Quote</option>
                <option value="music">Music</option>
              </select>
            </div>

            <button className="btn btn-primary w-100" onClick={handleAddItem}>Add Item</button>
          </div>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="moodboard" direction="horizontal">
          {(provided) => (
            <div
              className="d-flex flex-row overflow-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ gap: '1rem', paddingBottom: '1rem' }}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="card flex-shrink-0"
                      style={{ width: '250px' }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          {item.type === 'image' ? 'Image' : item.type === 'quote' ? 'Quote' : 'Music'}
                        </h5>
                        <div className="card-text">{renderContent(item)}</div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Moodboard;
