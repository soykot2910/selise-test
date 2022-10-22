import React, { useEffect, useState } from "react";
import BookmarkModal from "./BookmarkModal";
import PlusIcon from "./icons/PlusIcon";

const AddBookmark = ({ allCategory, modalIsOpen, closeModal }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState(false);

  // error state
  const [urlError, setUrlError] = useState("");

  const urlPatternValidation = (URL) => {
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    return regex.test(URL);
  };

  const changeUrl = (event) => {
    const { value } = event.target;

    if (urlPatternValidation(value)) {
      setUrl(value);
    } else {
      setUrlError("Url not valid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let localItem = JSON.parse(localStorage.getItem("data"));
    var updateBookmark = [];
    if (localItem) {
      updateBookmark = [...localItem];
    }
    updateBookmark.push({
      title: title,
      url: url,
      category: category,
    });

    localStorage.setItem("data", JSON.stringify(updateBookmark));
    closeModal();
  };

  return (
    <div>
      <BookmarkModal
        title="Add Bookmark"
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              required
              max={30}
              className="block px-4 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Url
            </label>
            <input
              placeholder="Url"
              type="text"
              onChange={(e) => changeUrl(e)}
              required
              className="block px-4 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
            />
            {urlError.length > 0 && (
              <span className="text-red-600 text-[12px]">{urlError}</span>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Category
            </label>

            <div className="flex justify-center items-center">
              {allCategory?.length > 0 ? (
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={newCategory}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Select Category</option>
                  {allCategory?.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="New Category Name"
                  type="text"
                  required
                  className="block px-4 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                />
              )}

              <div
                onClick={(e) => setNewCategory(true)}
                className="p-2 cursor-pointer rounded-md border-[1px] border-gray-700 ml-8"
              >
                <PlusIcon />
              </div>
            </div>
          </div>

          {newCategory && (
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Add New Category
              </label>

              <div className="flex justify-center items-center">
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="New Category Name"
                  type="text"
                  required
                  className="block px-4 py-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Cancle
            </button>

            <button
              //   onClick={closeModal}
              type={"submit"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </BookmarkModal>
    </div>
  );
};

export default AddBookmark;
