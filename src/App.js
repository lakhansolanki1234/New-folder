import React, { useState } from 'react';
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Heading from './component/Headeing';
import InputField from './component/Text';
import Textarea from './component/Textarea';
import RadioButton from './component/RadioButton';
import ResponsiveAppBar from './component/Navbar';
const App = () => {

  const [formComponents, setFormComponents] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData('text/plain');
    const dropPosition = event.clientY;

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
      updatedComponents.push({ component, position: dropPosition });
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

  return (<>
      
    <DndProvider backend={HTML5Backend}>
      
      <div className="container">
        <div className="form-builder ">
          <div className="draggable-item chip1"  draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Text Field');
                }}>
            <button>
              <span
               
              >
                Text Field
              </span>
            </button>
          </div>
          <div className="draggable-item chip1">
            <button>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Text Area');
                }}
              >
                Text Area
              </span>
            </button>
          </div>
          <div className="draggable-item chip1">
            <button>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Radio');
                }}
              >
                Radio
              </span>
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
              <div
                key={index}
                className="form-component"
                style={{ top: component.position }}
                >
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
