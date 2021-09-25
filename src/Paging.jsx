import React, { useState } from "react";
import "./index.css";
import Fetch from "./Fetch";

function Paging() {
  const [val, setVal] = useState(1);

  function inc() {
    setVal(val + 1);
  }
  function dec() {
    if (val > 1) {
      setVal(val - 1);
    }
  }

  return (
    <>
      <div className="bg-ligh text-center mt-4">
        <div className="container">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-link" onClick={dec}>
                Previous
              </li>

              <li className="page-link">{val}</li>

              <li className="page-link" onClick={inc}>
                Next
              </li>
            </ul>
          </nav>

          <hr />
        </div>
      </div>

      <Fetch val={val} />
    </>
  );
}

export default Paging;
