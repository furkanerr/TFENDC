import React from "react";
import { useData } from "../../context/dataContext";

const Pagination = () => {
  const {
    currentPage,
    handleNextIcon,
    handlePreviousIcon,
    handleNext,
    handlePrevious,
    itemQuantity,
    paginationData,
    searchResults,
  } = useData();
  return (
    searchResults.length > 0 &&  (
    <div className="pagination">
      {" "}
      {currentPage !== 1 && (
        <>
          <span className="prev" onClick={() => handlePreviousIcon()}>
            Previous
          </span>
        </>
      )}
      {currentPage > 1 && (
        <>
          {currentPage > 4 && (
            <>
              <div className="first" onClick={(e) => handlePrevious(e)}>
                1
              </div>
              <span className="dots">. . .</span>
            </>
          )}

          {currentPage - 2 !== 0 && (
            <div onClick={(e) => handlePrevious(e)}>{currentPage - 2}</div>
          )}

          <div onClick={(e) => handlePrevious(e)}>{currentPage - 1}</div>
        </>
      )}
      <span className="currentPage">{currentPage}</span>
      {
        paginationData.length >0 && itemQuantity  &&(
            <>
            {currentPage !== Math.ceil(itemQuantity / 5) &&
        currentPage + 1 !==
          Math.ceil(itemQuantity / 5)&&(
            <div onClick={(e) => handleNext(e)}>{currentPage + 1}</div>
          )}
      {currentPage !== Math.ceil(itemQuantity / 5) &&
        currentPage + 1 !==
          Math.ceil(itemQuantity / 5)&&(
            <div onClick={(e) => handleNext(e)}>{currentPage + 2}</div>
          )}
      {currentPage + 4 <= Math.ceil(itemQuantity / 5) && (
        <span className="dots">. . .</span>
      )}
      {currentPage + 2 !== Math.ceil(itemQuantity / 5) &&
        currentPage !== Math.ceil(itemQuantity / 5) && (
          <div className="last" onClick={(e) => handleNext(e)}>
            {Math.ceil(itemQuantity / 5)}
          </div>
        )}
      {currentPage !== Math.ceil(itemQuantity / 5) && (
        <span className="next" onClick={() => handleNextIcon()}>
          Next
        </span>
      )}
            </>
        )
      }
    </div>
  )
  );
};

export default Pagination;
