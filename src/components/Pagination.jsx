import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ setCurrentPage, pageCount }) => {
  const [currentButton, setCurrentButton] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= pageCount; i++) arr.push(i);

    setPages(arr);
  }, [pageCount]);

  useEffect(() => {
    setButtons([...pages]);
  }, [pages]);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="flex justify-center mt-5">
      <div className="btn-group">
        {currentButton !== 1 ? (
          <button
            className="btn btn-sm bg-yellow-400/70 border-sky-50"
            onClick={() => setCurrentButton(currentButton - 1)}
          >
            <FaArrowLeft />
          </button>
        ) : null}
        {buttons.map((page, idx) => {
          return (
            <button
              key={idx}
              className={`btn btn-sm ${
                currentButton === page
                  ? "btn-active btn-disabled !bg-yellow-500"
                  : "bg-yellow-400/70"
              } !border-sky-50`}
              onClick={() => setCurrentButton(page)}
            >
              {page}
            </button>
          );
        })}
        {currentButton !== pages.length ? (
          <button
            className="btn btn-sm bg-yellow-400/70 border-sky-50"
            onClick={() => setCurrentButton(currentButton + 1)}
          >
            <FaArrowRight />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
