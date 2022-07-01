import React, { useState } from "react";
import Cards from "./Cards";
import { createPortal } from "react-dom";
import closeIcon from "../../../images/icon-close-modal.svg";
import Thanks from "../Thanks";
import { useSelector, useDispatch } from "react-redux";
import { toggleSelection } from "../../../App/Slice";

const Selected = () => {
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  return createPortal(
    <>
      <div className='drop_shadow' style={{ zIndex: "1000" }}></div>
      {submit ? (
        <Thanks setSubmit={setSubmit} />
      ) : (
        <div className='Selection'>
          <div className='Selection_head'>
            <h1 className='Selection_head_h1'>Back this project</h1>
            <img
              onClick={() => dispatch(toggleSelection())}
              className='Selection_head_icon'
              src={closeIcon}
              alt='close'
            />
          </div>
          <p className='Selection_title'>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          {data.map((items) => (
            <Cards
              setSubmit={setSubmit}
              key={items.id}
              id={items.id}
              title={items.title}
              content={items.content}
              pledge={items.pledge}
              left={items.left}
            />
          ))}
        </div>
      )}
    </>,
    document.getElementById("root")
  );
};

export default Selected;
