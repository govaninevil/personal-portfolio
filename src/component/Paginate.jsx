import React from 'react';
import ReactPaginate from 'react-paginate';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";



const Paginate = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      previousLabel={<FcPrevious />}
      nextLabel={<FcNext />}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Paginate;
