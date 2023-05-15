import React, { useState } from 'react';
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Heading from './component/Headeing';
import InputField from './component/Text';
import Textarea from './component/Textarea';
import RadioButton from './component/RadioButton';
import ResponsiveAppBar from './component/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const App = () => {

  const [formComponents, setFormComponents] = useState([]);
  const handleDrop = (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData('text/plain');
    const { clientX, clientY } = event;
    const dropPosition = { x: clientX, y: clientY };

    if (text === 'Text Field') {
      handleComponentClick(<InputField />, dropPosition);
    } else if (text === 'Text Area') {
      handleComponentClick(<Textarea />, dropPosition);
    } else if (text === 'Radio') {
      handleComponentClick(<RadioButton />, dropPosition);
    } else if (text === 'Heading') {
      handleComponentClick(<Heading />, dropPosition);
    }
  };

  const handleComponentClick = (component, dropPosition) => {
    setFormComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      const { x, y } = dropPosition;
      const style = { 
        position: 'absolute',
        left: `${x-350}px`,
        top: `${y-50}px`,
      };
      updatedComponents.push({ component, style });
      return updatedComponents;
    });
  };
  

  const handleDeleteComponent = (index) => {
    setFormComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 1);
      return updatedComponents;
    });
  };
  

  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text/plain', text);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJson = JSON.stringify(formComponents);
    localStorage.setItem('data2', formJson);
    console.log(formJson);
    // You can now do whatever you want with the form JSON, such as sending it to a server to save it to a database
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="container">
          <div className="form-builder ">
            <div
              className="draggable-item chip1"
              draggable
              onDragStart={(event) => {
                handleDragStart(event, 'Text Field');
              }}
            >
              <button>
                <span>Text Field</span>
              </button>
            </div>
            <div
              className="draggable-item chip1"
              draggable
              onDragStart={(event) => {
                handleDragStart(event, 'Text Area');
              }}
            >
              <button>
                <span>Text Area</span>
              </button>
            </div>
            <div
              className="draggable-item chip1"
              draggable
              onDragStart={(event) => {
                handleDragStart(event, 'Radio');
              }}
            >
              <button>
                <span>Radio</span>
              </button>
            </div>
          <div className="draggable-item chip1">
            <button>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Heading');
                }}
              >
                Heading
              </span>
            </button>
          </div>
          </div>
          <div className="drop-zone whiteboard" onDrop={handleDrop} onDragOver={handleDragOver}>
            <form onSubmit={handleSubmit}>
              {formComponents.map((component, index) => (
                <div key={index} draggable className="form-component" style={component.style}>
                  <FontAwesomeIcon
        icon={faTimes}
        className="delete-option-icon"
         onClick={()=> handleDeleteComponent(index)}
      />
                   {component.component}
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default App;
