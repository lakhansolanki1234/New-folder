import React, { useState , useRef} from 'react';
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Heading from './component/Headeing';
import InputField from './component/Text';
import Textarea from './component/Textarea';
import RadioButton from './component/RadioButton';
import Modal from 'react-modal';
import ResponsiveAppBar from './component/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Box } from '@mui/material';
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
        left: `${x-720}px`,
        top: `${y-120}px`,
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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState('');

  const openModal = () => {
    console.log("hi")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = color;
    closeModal();
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
                <span className='modaltext'>Text Field</span>
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
                <span className='modaltext'>Text Area</span>
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
                <span className='modaltext'>Radio</span>
              </button>
            </div>
          <div className="draggable-item chip1">
            <button>
              <span
                draggable
                onDragStart={(event) => {
                  handleDragStart(event, 'Heading');
                }}
                className='modaltext'
              >
                Heading
              </span>
            </button>
            
          </div>
          <div className="draggable-item chip1" style={{position:"fixed", bottom:"20px", width:"18%" }}>
      <button onClick={openModal}>
        <span className='modaltext'>
          Change Background
        </span>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="editboard"
        overlayClassName="modal-overlay">
          <form onSubmit={handleSubmit1}>
            <label>
              Choose a background color:
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <button type="submit">Save</button>
            <button onClick={closeModal}>Cancel</button>
          </form>
        
        </Modal>
    </div>
          </div>
          <div className="drop-zone whiteboard" style={{background:`${color}`}}onDrop={handleDrop} onDragOver={handleDragOver}>
            <form onSubmit={handleSubmit}>
           
     
   
              {formComponents.map((component, index) => (
                <div key={index} draggable className="form-component" style={component.style}>
                 
      
                 <FontAwesomeIcon
        icon={faTimes}
        className="delete-option-icon"
         onClick={()=> handleDeleteComponent()}
      />
                   {component.component}
                   
                   </div>
              ))}
              
              <button type="submit" className='chip3' style={{width:"200px",fontSize:'20px',fontWeight:"600",padding:"17px",position:"fixed",bottom:"10px"}}>Submit</button>

            </form>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default App;
