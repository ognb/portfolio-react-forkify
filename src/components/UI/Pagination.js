import React from "react";

import { RESULT_PER_PAGE } from "../../Constats/Constats";

import { BtnPage } from "./CommonUI";

const Pagination = (props) => {
  const numPage = Math.ceil(props.count / RESULT_PER_PAGE);
  const { curPage } = props;
  const pagerBtnClickHandler = (e) => {
    const btn = e.target.closest(".btn--inline");
    if (!btn) return;

    const goToPage = +btn.dataset.goto;
    props.onPageChange(goToPage);
  };

  let content = null;
  const nextBtn = (
    <BtnPage type={"next"} goto={curPage + 1} onClick={pagerBtnClickHandler} />
  );
  const prevBtn = (
    <BtnPage type={"prev"} goto={curPage - 1} onClick={pagerBtnClickHandler} />
  );

  if (curPage === 1 && numPage > 1) {
    content = nextBtn;
  } else if (curPage === numPage && numPage > 1) {
    content = prevBtn;
  } else if (curPage < numPage) {
    content = (
      <React.Fragment>
        {nextBtn}
        {prevBtn}
      </React.Fragment>
    );
  }

  return <div className="pagination">{content}</div>;
};

export default Pagination;
