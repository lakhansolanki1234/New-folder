import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import edit from '../component/icons8-edit.svg'
import { Box } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement('#root'); // Set the app root element for accessibility

const InputField = ({ dropPosition }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[width,setwidth]=useState('300px');
  const[height,setheight]=useState('40px');
  const[lwidth,setlwidth]=useState('200px');
  const[lheight,setlheight]=useState('50px');
  const[clas,setclasses]=useState('form__input')
  const [font, setFont] = useState('Arial');
  const [label, setlabel]=useState('Enter Label')
  const [backgroundColor1, setBackgroundColor] = useState('rgb(0, 0, 0)');
  const [backgroundColor2, setBackgroundColor2] = useState('rgb(230, 229, 229)');
  const [backgroundColor3, setBackgroundColor3] = useState('rgb(0, 0, 0)');
  const [placeholder,setplaceholder]=useState('')
  const [fontsize,setfontsize]=useState("24")
  
  
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFontChange = (e) => {
    setFont(e.target.value);
  };
  const handleClassChange = (e) => {
    setclasses(e.target.value);
  };
  const handleBackgroundColorChange = (value) => {
    if (value) {
      setBackgroundColor(value);
    }
  };
  const handleBackgroundColorChange2 = (value) => {
    if (value) {
      setBackgroundColor2(value);
    }
  };
  const handleBackgroundColorChange3 = (value) => {
    if (value) {
      setBackgroundColor3(value);
    }
  };

  const draggableRef = useRef(null);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  function handleDragStart2(event) {
    // Calculate the offset between the mouse pointer and the top-left corner of the draggable element
    const draggableRect = draggableRef.current.getBoundingClientRect();
    const offset = {
      x: event.clientX - draggableRect.left,
      y: event.clientY - draggableRect.top
    };
  
    if (event.button === 0) { // Only start dragging if the left mouse button is held down
      // Save the starting position of the drag
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    // Save the offset and add event listeners for dragging
    setPosition(offset);
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  }
  
  function handleDrag(event) {
    // Calculate the new position of the element relative to the mouse pointer
    const newPosition = {
      x: event.clientX - position.x - 770,
      y: event.clientY - position.y - 120
    };
  
    // Update the position of the element using optional chaining
    draggableRef.current?.style?.setProperty('left', `${newPosition.x}px`);
    draggableRef.current?.style?.setProperty('top', `${newPosition.y}px`);
  }
  
  function handleDragEnd() {
    // Remove event listeners for dragging
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  }
  
  return (
    <div className="input-field"  
   style={{ position: 'absolute' }}>
 <div className="  font-bold py-2 px-4 rounded"
        ref={draggableRef}
        style={{ position: 'absolute', left: '400px', top: '90px' }}>
        <button
          className="bg-transparent h-10 w-10 rounded-md absolute z-10"
          ref={buttonRef}
          style={{ left: 'calc(0% + 20px)', top: '5px' }}
          onMouseDown={handleDragStart2}
        >
          =
        </button>
      <div className="input-header">
     
        <img src={edit} className="edit-icon" onClick={handleEditClick}/>
      </div>
     
      <Box sx={{display: "flex",
  flexDirection: "row",
  height: "100%", }}>
         <div style={{width:`${lwidth}`,height:`${lheight}`,display: "flex"}}>
        
      <label style={{fontFamily:`${font}`,fontSize:`${fontsize}px`,color:`${backgroundColor3}`,}}>{label}</label>
      </div>
      <div style={{ flex: "1" }}>
      <input type="text" style={{width:`${width}`,height:`${height}`,fontFamily:`${font}`,fontSize:`${fontsize-2}px`,color:`${backgroundColor1}`, background:`${backgroundColor2}`}} className={`${clas}`} placeholder={`${placeholder}`}/>
      </div>
     </Box>
    
     </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="editboard"
        overlayClassName="modal-overlay"
      >
        <form className>
        <h2 className='chip3'>Edit Input Field</h2>
        <div className='modal-row'>
        <label className='modaltext'>
           Label
           </label>
            <input type="text" className='chip2' value={label} onChange={(e)=> setlabel(e.target.value)}/>
          
        </div>
        <div className="modal-row">
          <label className='modaltext'>
            Required:
            </label>
            <input type="checkbox"  />
          
        </div>
        <div className="modal-row">
          
          <label className='modaltext'>
           Label Width
           </label>
            <input type="text" className='chip2' value={lwidth} onChange={(e)=> setlwidth(e.target.value)}/>
          
        </div>
       
        <div className="modal-row">
          <label className='modaltext'>
           Label Height
           </label>
            <input type="text"  className='chip2' value={lheight} onChange={(e)=> setlheight(e.target.value)}/>
          
        </div>
        <div className="modal-row">
  <label className='modaltext'>
    Label Color
    </label>
    <input type="color" className='chip2' value={backgroundColor3} onChange={(e) => handleBackgroundColorChange3(e?.target?.value)} />
  
</div>
        <div className="modal-row">
          
          <label className='modaltext'>
           width
           </label>
            <input type="text" className='chip2' value={width} onChange={(e)=> setwidth(e.target.value)}/>
          
        </div>
       
        <div className="modal-row">
          <label className='modaltext'>
           Height
           </label>
            <input type="text"  className='chip2' value={height} onChange={(e)=> setheight(e.target.value)}/>
          
        </div>
        <div className="modal-row" >
            <label className='modaltext'>
              Font:
              </label>
              <select value={font} className='chip2' onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
              </select>
           
          </div>
          <div className="modal-row">
          <label className='modaltext' >
            Font Size:
            </label>
            <input type="number"  className='chip2'value={fontsize} onChange={(e)=>setfontsize(e.target.value)}/>px
          
        </div>
          <div className="modal-row">
  <label className='modaltext'>
    Text Color
    </label>
    <input type="color" className='chip2' value={backgroundColor1} onChange={(e) => handleBackgroundColorChange(e?.target?.value)} />
  
</div>
<div className="modal-row">
  <label className='modaltext'>
    Background Color
    </label>
    <input type="color" className='chip2' value={backgroundColor2} onChange={(e) => handleBackgroundColorChange2(e?.target?.value)} />
  
</div>

       
        <div className="modal-row">
          <label className='modaltext'>
            Placeholder:
            </label>
            <input type="text" className='chip2' value={placeholder} onChange={(e)=> setplaceholder(e.target.value)}/>
         
        </div>
        <div className="modal-row">
          <label className='modaltext'>
            Class:
            </label>
           
            <select value={clas} className='chip2' onChange={handleClassChange}>
                <option value="form__input">form__input</option>
                <option value="effect-3">Effect 1</option>
                <option value="effect-7">Effect 2</option>
                <option value="effect-10">Effect 3</option>
                <option value="roundedinput">Simple Rounded</option>
              </select>
        
        </div>
        
       
        <div className="modal-row">
          <label className='modaltext'>
            Value:
            </label>
            <input type="text" className='chip2' />
          
        </div>
       
        <div className="modal-row">
          <label className='modaltext'>
            Max Length:
            </label>
            <input type="number" className='chip2' />
          
        </div>
        <button onClick={closeModal} >Close</button>
        <button type='submit'>Submit</button>
        </form>
      
        
      </Modal>
      </div>
  
  );
};

export default InputField;
