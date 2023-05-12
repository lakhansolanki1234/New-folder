import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from 'react-draggable';
import './App.css';
import YourComponent from './component/show';
import InputField from './component/Text';
import Textarea from './component/Textarea';
import RadioButton from './component/RadioButton';

const FormComponent = ({ component, index, moveComponent }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'form-component',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: 'form-component',
  }));

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`form-component ${isDragging ? 'dragging' : ''}`}
    >
      {component}
    </div>
  );
};

const App = () => {
  const [formComponents, setFormComponents] = useState([]);

  const handleComponentClick = (component) => {
    setFormComponents([...formComponents, component]);
  };

  const moveComponent = (fromIndex, toIndex) => {
    const components = [...formComponents];
    const component = components[fromIndex];
    components.splice(fromIndex, 1);
    components.splice(toIndex, 0, component);
    setFormComponents(components);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData('text/plain');

    if (text === 'Text Field') {
      handleComponentClick(<InputField />);
    } else if (text === 'Text Area') {
      handleComponentClick(<Textarea />);
    } else if (text === 'Radio') {
      handleComponentClick(<RadioButton />);
    }
  };

  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text/plain', text);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="form-builder">
          <Draggable onStart={() => false}>
            <button onClick={() => handleComponentClick('Text Field')}>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Text Field');
                }}
              >
                Text Field
              </span>
            </button>
          </Draggable>
          <Draggable onStart={() => false}>
            <button onClick={() => handleComponentClick('Text Area')}>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Text Area');
                }}
              >
                Text Area
              </span>
            </button>
          </Draggable>
          <Draggable onStart={() => false}>
            <button onClick={() => handleComponentClick('Radio')}>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Radio');
                }}
              >
                Radio
              </span>
            </button>
          </Draggable>
        </div>
        <div
          className="drop-zone whiteboard"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
>
<div className="grid-container">
{formComponents.map((component, index) => (
<div key={index} className="grid-item">
<FormComponent
               index={index}
               component={component}
               moveComponent={moveComponent}
             />
</div>
))}
</div>
<button type="submit" onClick={handleSubmit}>Submit</button>
</div>
</div>
</DndProvider>
);
};

export default App;