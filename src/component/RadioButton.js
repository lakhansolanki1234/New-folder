import React, { useState } from 'react';
import Modal from 'react-modal';
import { Box } from '@mui/material';
Modal.setAppElement('#root'); // Set the app root element for accessibility

const RadioButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size,setsize]=useState('');
  const[width,setwidth]=useState('300px');
  const[height,setheight]=useState('40px');
  const[lwidth,setlwidth]=useState('200px');
  const[lheight,setlheight]=useState('50px');
  const[clas,setclasses]=useState('form__input')
  const [font, setFont] = useState('Arial');
  const [label, setlabel]=useState('Enter Label')
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

  return (
    <div className="input-field">
      <div className="input-header">
        <span className="delete-icon">x</span>
        <span className="edit-icon" onClick={handleEditClick}>Edit</span>
      </div>
      <Box sx={{display: "flex",
  flexDirection: "row",
  height: "100%", }}>
        <div style={{width:`${lwidth}`,height:`${lheight}`,display: "flex", alignItems: "start" }}>
      <label style={{fontFamily:`${font}`,fontSize:`${fontsize}px`,textAlign:"center"}}>{label}</label>
      </div>
      <div style={{ display:"flex", margin:"10px" }}>
      <div>
      
      <input type="radio" name="radio-group-1681197254001-0" value="option-1" />
      <label>Option 1</label>
      </div>
     <div>
     <input type="radio" name="radio-group-1681197254001-0" value="option-2" />
      <label>Option 2</label>
     </div>
      <div>
      <input type="radio" name="radio-group-1681197254001-0" value="option-3" />
      <label>Option 3</label>
      </div>
      </div>
      </Box>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Edit Input Field</h2>
        <div className="modal-row">
          <label>
            Required:
            <input type="checkbox" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Label:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Help Text:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Inline Display:
            <input type="checkbox" />
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
          <label>
            Options:
          </label>
          <div>
            <div>
              <label>
                Option 1:
                <input type="text" />
              </label>
              </div>
              <div>
              <label>
                Value:
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Option 2:
                <input type="text" />
            
              </label>
              </div>
              <div>
              <label>
                Value:
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Option 3:
                <input type="text" />
              </label>
              <label>
                Value:
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Add Option +
                <input type="text" />
              </label>
            </div>
          </div>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default RadioButton;

