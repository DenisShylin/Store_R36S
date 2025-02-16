// src/components/Modal/ModalPortal.jsx
import { createPortal } from "react-dom";

const ModalPortal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
};

export default ModalPortal;
