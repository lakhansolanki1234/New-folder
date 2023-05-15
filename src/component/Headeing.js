import React, { useState } from 'react';
import Modal from 'react-modal';
import edit from '../component/icons8-edit.svg'
import { Box } from '@mui/material';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const Heading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[width,setwidth]=useState('300px');
  const[height,setheight]=useState('40px');
  const[lwidth,setlwidth]=useState('200px');
  const[lheight,setlheight]=useState('50px');
  const[clas,setclasses]=useState('form__input')
  const [font, setFont] = useState('Arial');
  const [label, setlabel]=useState('Heading')
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


  return (
    <div className="input-field">
      <div className="input-header">
        <span className="delete-icon">x</span>
        <img src={edit} className="edit-icon" onClick={handleEditClick}/>
      </div>
      <Box sx={{display: "flex",
  flexDirection: "row",
  height: "100%", }}>
         <div style={{width:`${lwidth}`,height:`${lheight}`,display: "flex"}}>
        
      <label style={{fontFamily:`${font}`,fontSize:`${fontsize}px`}}>{label}</label>
      </div>
      <div style={{ flex: "1" }}>
      <span style={{ width: `${width}`, height: `${height}`, fontFamily: `${font}`, fontSize: `${fontsize - 2}px`, color: `${backgroundColor1}`, background: `${backgroundColor2}` }} className={`${clas}`} contentEditable>{placeholder}</span>

      </div>
     </Box>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="editboard"
        overlayClassName="modal-overlay"
      >
        <form>
        <h2>Edit Input Field</h2>
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
    Background Color
    <input type="color" value={backgroundColor2} onChange={(e) => handleBackgroundColorChange2(e?.target?.value)} />
  </label>
</div>
        <div className="modal-row">
          <label>
            Class:
            <input type="text" value={clas} onChange={(e)=> setclasses(e.target.value)} />
          </label>
        </div>
  
        <div className="modal-row">
          <label>
            Max Length:
            <input type="number" />
          </label>
        </div>
        <button onClick={closeModal} >Close</button>
        <button type='submit'>Submit</button>
        </form>
      
        
      </Modal>
      </div>
  
  );
};

export default Heading;
