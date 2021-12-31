import React, { Component } from "react";

const Pagination = (props: { page: number,
  lastPage: number,
  pageChanged: (page: number) => void;
}) => {

  const next = () => {
    if (props.page < props.lastPage) {
      props.pageChanged(props.page + 1);
    }
  };

  const prev = () => {
    if (props.page >= 1) {
      props.pageChanged(props.page - 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prev}>
            Preveous
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" onClick={next}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
