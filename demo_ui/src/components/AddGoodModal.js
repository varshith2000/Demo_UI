import React from 'react';
import Modal from 'react-modal';
import '../styles/AddGoodModal.css';

const AddGoodModal = ({ isOpen, onRequestClose, onAdd, newGoodName, setNewGoodName }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Add New Good" style={{ content: { maxWidth: 400, margin: 'auto', padding: 30 } }}>
    <h3>Add New Good</h3>
    <input type="text" value={newGoodName} onChange={e => setNewGoodName(e.target.value)} placeholder="Enter new good name" style={{ width: '100%', marginBottom: 16 }} />
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={onRequestClose} style={{ marginRight: 10 }}>Cancel</button>
      <button onClick={onAdd} disabled={!newGoodName}>Add</button>
    </div>
  </Modal>
);

export default AddGoodModal;
