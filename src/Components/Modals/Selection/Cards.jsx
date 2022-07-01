import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelected, donate } from "../../../App/Slice";

const Cards = ({ title, id, content, pledge, left, setSubmit }) => {
  const selectedPlege = useSelector((state) => state.SelectedPlege);
  const dispatch = useDispatch();
  const [newPledge, setNewPledge] = useState(pledge);
  const [error, setError] = useState(false);
  const Donate = () => {
    if (newPledge >= pledge && id !== 0) {
      dispatch(
        donate({
          id,
          newPledge,
        })
      );
      setSubmit(true);
    } else if (id === 0) {
      dispatch(
        donate({
          id,
          newPledge,
        })
      );
      setSubmit(true);
    } else {
      setError(true);
    }
  };
  const seletedInput = useRef();
  useEffect(() => {
    if (seletedInput.current) {
      if (selectedPlege === id) seletedInput.current.focus();
    }
  }, [id, selectedPlege]);
  return (
    <div
      onClick={() => left !== 0 && dispatch(updateSelected(id))}
      className={
        left === 0
          ? "Cards_disabled "
          : selectedPlege === id
          ? "Cards_active"
          : "Cards"
      }>
      <div className='Cards_head'>
        <div className='Cards_head_checkbox'>
          {selectedPlege === id && left !== 0 && (
            <div className='Cards_head_checkbox-checked'></div>
          )}
        </div>
        <div className='Cards_head_title'>
          <h1 className='Cards_head_title_h1'>{title}</h1>
          {pledge && (
            <p className='Cards_head_title_p'>Pledge ${pledge} or more</p>
          )}
        </div>
      </div>
      <p className='Cards_content'>{content}</p>
      {left >= 0 && (
        <p className='Cards_left'>
          <span>{left}</span>left
        </p>
      )}
      {selectedPlege === id && left !== 0 && (
        <div className='Card_pledge'>
          <p className='Card_pledge_title'>Enter Your pledge</p>
          <div className='Card_pledge_span'>
            <div className='Card_pledge_span-div'>
              {" "}
              <p>$</p>
              <input
                onChange={(e) => setNewPledge(e.target.valueAsNumber)}
                className={error ? "error" : "no"}
                type='number'
                min={pledge}
                defaultValue={pledge}
              />
            </div>

            <button onClick={() => Donate()}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
