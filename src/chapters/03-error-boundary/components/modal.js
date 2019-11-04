import React from "react";
import { createPortal } from "react-dom";

const ModalContent = ({ onClose }) => (
  <div className="modal">
    <h3>Email Error</h3>
    <button className="modal-close" onClick={onClose}>Close</button>
  </div>
)

const Modal = ({ onClose }) => {
  return createPortal(
    <ModalContent onClose={onClose} />,
    document.getElementById("modal-root")
  );
}

export default Modal;