import React from "react";
import BookmarkModal from "./BookmarkModal";

const AddDetailsModal = ({ activeDetails, closeModal, modalIsOpen }) => {
  return (
    <div>
      <BookmarkModal
        title="Add Details"
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      >
        <div>
          <h3>Title: {activeDetails.title}</h3>
          <p>URL: {activeDetails.url}</p>
          <p>Category:{activeDetails.category}</p>
        </div>
      </BookmarkModal>
    </div>
  );
};

export default AddDetailsModal;
