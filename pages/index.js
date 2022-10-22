import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookmarkModal from "../components/BookmarkModal";
import AddBookmark from "../components/AddBookmark";
import AllBookmarkList from "../components/AllBookmarkList";

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [allCategory, setAllCategory] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let categoryArray = [];
    let bookmarkData = JSON.parse(localStorage.getItem("data"));

    // To get categories
    let categories = {};
    bookmarkData?.forEach((item) => {
      if (!Object.keys(categories).includes(item.category)) {
        categories[item.category] = {
          items: [],
        };
      }
    });

    // Add items to categories
    bookmarkData?.forEach((product) => {
      Object.keys(categories).forEach((category) => {
        categoryArray.push(category);
        if (product.category === category) {
          categories[category].items.push(product);
        }
      });
    });

    setAllCategory([...new Set([...categoryArray])]);
    setBookmarks(categories);
  }, []);

  console.log(bookmarks.length);

  return (
    <div className="container mx-auto py">
      <Header openModal={openModal} />
      <div className="w-[70%] mx-auto text-center">
        <h3 className="font-bold text-lg mb-12">All Bookmarks</h3>

        {Object.keys(bookmarks).length > 0 ? (
          <AllBookmarkList allCategory={allCategory} allData={bookmarks} />
        ) : (
          <div>
            <h2 className="text-5xl">No Bookmark found</h2>
          </div>
        )}
      </div>

      <AddBookmark
        allCategory={allCategory}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Home;
