import React from 'react';
import "../index.css";
function Pagination({ totalPages, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => paginate(currentPage - 1)} href="#!" className="page-link">
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a onClick={() => paginate(currentPage + 1)} href="#!" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
