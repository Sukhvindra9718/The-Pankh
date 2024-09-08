import React from 'react';

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>Popup Title</h2>
        <p>This is a simple, responsive popup!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '90%',  // Adjust to be responsive
    width: '100%',    // Adjust to be responsive
    margin: '0 20px', // To ensure it looks good on very small screens
    boxSizing: 'border-box',
    maxHeight: '80vh',  // Ensure it fits within the viewport height
    overflowY: 'auto',  // Scroll if content is too long
  },
};

export default Popup;
