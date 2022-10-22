import React, { useState } from "react";
import AddDetailsModal from "./AddDetailsModal";

const AllBookmarkList = ({ allCategory, allData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState({});

  function openModal(item) {
    setIsOpen(true);
    setActiveDetails(item);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {allCategory?.map((category) => (
          <div key={category} className="w-full lg:w-5/12">
            <h3 className="text-bold">{category}</h3>

            <div className="w-full flex-col border-[1px] overflow-y-scroll h-[200px] rounded-md my-3  border-gray-500 p-8 flex justify-between">
              {allData[category]?.items?.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <h3>{item.title}</h3>
                  <button
                    onClick={(e) => openModal(item)}
                    className="border-[1px] px-4 py-2 cursor-pointer border-gray-600"
                  >
                    Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AddDetailsModal
        activeDetails={activeDetails}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AllBookmarkList;
