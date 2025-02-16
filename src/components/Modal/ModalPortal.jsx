import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const ModalPortal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
};

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

ModalPortal.defaultProps = {
  isOpen: false,
};

export default ModalPortal;
