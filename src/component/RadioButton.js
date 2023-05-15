import React, { useState ,useEffect,useRef} from 'react';
import Modal from 'react-modal';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement('#root'); // Set the app root element for accessibility

const RadioButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [options, setOptions] = useState([
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" },
    { id: 3, value: "Option 3" },
  ]);
  const [size,setsize]=useState('');
  const[width,setwidth]=useState('300px');
  const[height,setheight]=useState('40px');
  const[lwidth,setlwidth]=useState('200px');
  const[lheight,setlheight]=useState('50px');
  const[clas,setclasses]=useState('form__input');
  const [font, setFont] = useState('Arial');
  const [label, setlabel]=useState('Enter Label');
  const [backgroundColor1, setBackgroundColor] = useState('rgb(0, 0, 0)');
  const [backgroundColor2, setBackgroundColor2] = useState('rgb(230, 229, 229)');
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

  const addOption = () => {
    const newOptionId = options.length + 1;
    const newOption = { id: newOptionId, value: `Option ${newOptionId}` };
    setOptions([...options, newOption]);
  };
  const draggableRef = useRef(null);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  function handleDragStart2(event) {
    event.preventDefault(); // Prevent default browser behavior
  
    // Calculate the offset between the mouse pointer and the top-left corner of the draggable element
    const draggableRect = draggableRef.current.getBoundingClientRect();
    const offset = {
      x: event.clientX - draggableRect.left,
      y: event.clientY - draggableRect.top
    };
  
    if (event.button === 0) { // Only start dragging if the left mouse button is held down
      setIsDragging(true);
      setPosition(offset);
    }
  }
  
  function handleDrag(event) {
    event.preventDefault(); // Prevent default browser behavior
  
    if (!isDragging) {
      return;
    }
  
    // Calculate the new position of the element relative to the mouse pointer
    const draggableRect = draggableRef.current.getBoundingClientRect();
    const newPosition = {
      x: event.clientX - position.x - draggableRect.left,
      y: event.clientY - position.y - draggableRect.top
    };
  
    // Update the position of the element
    draggableRef.current.style.left = `${newPosition.x}px`;
    draggableRef.current.style.top = `${newPosition.y}px`;
  }
  
  function handleDragEnd() {
    setIsDragging(false);
  }
  
  // Add event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    }
  
    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging]);
  
  // Attach the event listeners to the draggable element
  useEffect(() => {
    if (draggableRef.current) {
      draggableRef.current.addEventListener('mousedown', handleDragStart2);
    }
  
    return () => {
      if (draggableRef.current) {
        draggableRef.current.removeEventListener('mousedown', handleDragStart2);
      }
    };
  }, []);
  return (
    <div className="input-field">
      <div className="input-header">
      <div className="  font-bold py-2 px-4 rounded"
        ref={draggableRef}
        style={{ position: 'absolute'}}>
        <button
          className="bg-transparent h-10 w-10 rounded-md absolute z-10"
          ref={buttonRef}
          style={{ left: 'calc(0% + 20px)', top: '5px' }}
          onMouseDown={handleDragStart2}
        >
          =
        </button>
        <span className="delete-icon">x</span>
        <span className="edit-icon" onClick={handleEditClick}>Edit</span>
      

      <Box sx={{display:"block",
  flexDirection: "row",
  height: "100%", }}>
        <div style={{width:`${lwidth}`,height:`${lheight}`,display: "flex", alignItems: "start" }}>
      <label style={{fontFamily:`${font}`,fontSize:`${fontsize}px`,textAlign:"center"}}>{label}</label>
      </div>
      <div style={{ margin: "10px" }}>
            {options.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  name="radio-group-1681197254001-0"
                  value={option.value}
                  style={{ margin: "5px", backgroundColor: backgroundColor1 }}
                />
                <label style={{fontFamily:`${font}`,fontSize:`${fontsize}px`,textAlign:"center"}}>{option.value}</label>
              </div>
            ))}
          </div>
      </Box>
      </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="editboard "
        overlayClassName="modal-overlay"
      >
        <h2 className='chip3'>Edit Radio Button</h2>
        <div className="modal-row">
          <label className='modaltext'>
            Required:
            </label>
            <input type="checkbox" />
          
        </div>
        <div className='modal-row'>
        <label className='modaltext'>
           Label
           </label>
            <input type="text" className="chip2" value={label} onChange={(e)=> setlabel(e.target.value)}/>
          
        </div>
        <div className="modal-row">
          
          <label className='modaltext'>
           Label Width
           </label>
            <input type="text" className="chip2" value={lwidth} onChange={(e)=> setlwidth(e.target.value)}/>
          
        </div>
       
        <div className="modal-row">
          <label className='modaltext'>
           Label Height
           </label>
            <input type="text" className="chip2"  value={lheight} onChange={(e)=> setlheight(e.target.value)}/>
         
        </div>
        <div className="modal-row">
          
          <label className='modaltext'>
           Width
           </label>
            <input type="text" className="chip2" value={width} onChange={(e)=> setwidth(e.target.value)}/>
          
        </div>
       
        <div className="modal-row">
          <label className='modaltext'>
           Height
           </label>
            <input type="text"  className="chip2" value={height} onChange={(e)=> setheight(e.target.value)}/>
          
        </div>
        <div className="modal-row">
            <label className='modaltext'>
              Font:
              </label>
              <select value={font}  className="chip2" onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
              </select>
            
          </div>
          <div className="modal-row">
          <label className='modaltext'>
            Font Size:
            </label>
            <input type="number"  className="chip2" value={fontsize} onChange={(e)=>setfontsize(e.target.value)}/>px
         
        </div>
          <div className="modal-row">
  <label className='modaltext'>
    Text Color
    </label>
    <input type="color"  className="chip2" value={backgroundColor1} onChange={(e) => handleBackgroundColorChange(e?.target?.value)} />
 
</div>
        <div className="modal-row">
          <label className='modaltext'>
            Class:
            </label>
            <input type="text"  className="chip2" />
          
        </div>
        <div className="modal-row">
          <label className='modaltext'>
            Name:
            </label>
            <input type="text"  className="chip2" />
         
        </div>
        <div className="modal-row">
          <label className='modaltext'>Options:</label>
          <div style={{ margin: "10px" }}>
          {options.map((option) => (
  <div key={option.id}>
    <label className='modaltext'>
      Option:
      <input
        type="text"
        value={option.value}
        style={{ margin: "5px", }}
        className="chip2"
        onChange={(e) =>
          setOptions(
            options.map((opt) =>
              opt.id === option.id ? { ...opt, value: e.target.value } : opt
            )
          )
        }
      />
    </label>
    {options.length > 2 && (
      <FontAwesomeIcon
        icon={faTimes}
        className="delete-option-icon"
        onClick={() =>
          setOptions(options.filter((opt) => opt.id !== option.id))
        }
      />
    )}
  </div>
))}

          </div>
          <button onClick={addOption}>Add Option</button>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default RadioButton;

