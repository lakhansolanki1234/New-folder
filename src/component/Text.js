import React, { useState } from 'react';
import Modal from 'react-modal';
import edit from '../component/icons8-edit.svg'

Modal.setAppElement('#root'); // Set the app root element for accessibility

const InputField = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[width,setwidth]=useState('300px');
  const[height,setheight]=useState('30px');
  const[clas,setclasses]=useState('formcontrol')

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
        <img src={edit} className="edit-icon" onClick={handleEditClick}/>
      </div>
      <input type="text" style={{width:`${width}`,height:`${height}`}} className={`${clas}`} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Input Field"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <form>
        <h2>Edit Input Field</h2>
        <div className="modal-row">
          <label>
            Required:
            <input type="checkbox" />
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
            Help Text:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Placeholder:
            <input type="text" />
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
            Name:
            <input type="text" />
          </label>
        </div>
       
        <div className="modal-row">
          <label>
            Value:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Type:
            <input type="text" />
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

export default InputField;
