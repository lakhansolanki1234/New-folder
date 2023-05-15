import React, { useState } from 'react';
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
  return (
    <div className="input-field">
      <div className="input-header">
        <span className="delete-icon">x</span>
        <span className="edit-icon" onClick={handleEditClick}>Edit</span>
      </div>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Edit Radio Button</h2>
        <div className="modal-row">
          <label>
            Required:
            <input type="checkbox" />
          </label>
        </div>
        <div className='modal-row'>
        <label>
           Label
            <input type="text" value={label} onChange={(e)=> setlabel(e.target.value)}/>
          </label>
        </div>
        <div className="modal-row">
          
          <label>
           Label Width
            <input type="text" value={lwidth} onChange={(e)=> setlwidth(e.target.value)}/>
          </label>
        </div>
       
        <div className="modal-row">
          <label>
           Label Height
            <input type="text"  value={lheight} onChange={(e)=> setlheight(e.target.value)}/>
          </label>
        </div>
        <div className="modal-row">
          
          <label>
           width
            <input type="text" value={width} onChange={(e)=> setwidth(e.target.value)}/>
          </label>
        </div>
       
        <div className="modal-row">
          <label>
           Height
            <input type="text"  value={height} onChange={(e)=> setheight(e.target.value)}/>
          </label>
        </div>
        <div className="modal-row">
            <label>
              Font:
              <select value={font} onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
              </select>
            </label>
          </div>
          <div className="modal-row">
          <label>
            Font Size:
            <input type="number" value={fontsize} onChange={(e)=>setfontsize(e.target.value)}/>px
          </label>
        </div>
          <div className="modal-row">
  <label>
    Text Color
    <input type="color" value={backgroundColor1} onChange={(e) => handleBackgroundColorChange(e?.target?.value)} />
  </label>
</div>
        <div className="modal-row">
          <label>
            Class:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Name:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>Options:</label>
          <div style={{ margin: "10px" }}>
          {options.map((option) => (
  <div key={option.id}>
    <label>
      Option:
      <input
        type="text"
        value={option.value}
        style={{ margin: "5px", }}
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

