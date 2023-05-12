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
    hover: (item, monitor) => {
      if (item.index !== index) {
        moveComponent(item.index, index);
        item.index = index;
      }
    },
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
  const handleDragStop = (event, component) => {
    const { pageX, pageY } = event;
    const dropZoneRect = document.querySelector('.drop-zone').getBoundingClientRect();
  
    if (
      pageX >= dropZoneRect.left &&
      pageX <= dropZoneRect.right &&
      pageY >= dropZoneRect.top &&
      pageY <= dropZoneRect.bottom
    ) {
      handleComponentClick(component);
    }
  }
  
  const handleDrop = (event) => {
    event.preventDefault();
    const component = JSON.parse(event.dataTransfer.getData('component'));
    handleComponentClick(component);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('data',formComponents)
    const formJson = JSON.stringify(formComponents);
    localStorage.setItem("data2",formJson)
    console.log(formJson);
    // You can now do whatever you want with the form JSON, such as sending it to a server to save it to a database
  };

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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="form-builder">
        <Draggable onStop={(event) => handleDragStop(event, <InputField />)}>
          <button onClick={() => handleComponentClick(
        <InputField/>
          )}>
            Text Field
          </button>
          </Draggable>
          <button onClick={() => handleComponentClick(<Textarea/>)}>
            Text Area
          </button>
          <button onClick={() => handleComponentClick(<RadioButton/>)}>
            Radio
          </button>
        </div>
        <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
        <div className="whiteboard">
          <form onSubmit={handleSubmit}>
            {formComponents.map((component, index) => (
              <FormComponent
                key={index}
                index={index}
                component={component}
                moveComponent={moveComponent}
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </DndProvider>
  //  <YourComponent/>
  );
};

export default App;
