import React from "react";
import Modal from "react-modal";
import { CloseIcon } from "./icons/CloseIcon";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    padding: "0px",
  },
};

const BookmarkModal = ({ modalIsOpen, title, closeModal, children }) => {
  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <div className="flex px-6 justify-between items-center py-3 border-b-[1px] border-b-gray-600">
        <h3 className="text-lg font-medium">{title}</h3>
        <button onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>

      <div className="py-8 px-8">{children}</div>
    </Modal>
  );
};

export default BookmarkModal;
