import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const Textarea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <textarea></textarea>

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
            Placeholder:
            <input type="text" />
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
            Access Limit access to one or more of the following roles:
            <input type="text" />
          </label>
        </div>
        <div className="modal-row">
          <label>
            Value:
            <input type="text" />
          </label>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Textarea;
