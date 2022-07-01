import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import completedIcon from "../../images/icon-check.svg";
import { useDispatch } from "react-redux";
import { toggleSelection } from "../../App/Slice";
import party from "party-js";

const Thanks = () => {
  const dispatch = useDispatch();

  const thankRef = useRef();

  useEffect(() => {
    party.confetti(thankRef.current);
  }, []);

  return createPortal(
    <div ref={thankRef} className='Thanks'>
      <img className='Thanks_icon' src={completedIcon} alt='Completed' />
      <p className='Thanks_title'>Thanks for your support!</p>
      <p className='Thanks_content'>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        onClick={() => dispatch(toggleSelection())}
        className='Thanks_btn'>
        Got it!
      </button>
    </div>,
    document.getElementById("root")
  );
};

export default Thanks;
