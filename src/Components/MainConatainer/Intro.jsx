import React, { useState } from "react";
import bookmarkIcon from "../../images/icon-bookmark.svg";
import mastercraftIcon from "../../images/logo-mastercraft.svg";
import Selected from "../Modals/Selection/Selected";
import { useSelector, useDispatch } from "react-redux";
import { toggleSelection, bookmark } from "../../App/Slice";
const Intro = () => {
  // const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const { isSelectionOpen, bookmarked } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <article id='Intro' className='Intro'>
      <img className='Intro_Logo' src={mastercraftIcon} alt='mastercraft' />
      <h1 className='Intro_title'>Mastercraft Bamboo Monitor Riser</h1>
      <p className='Intro_subtitle'>
        {" "}
        A beautiful handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className='Intro_btn'>
        <button
          onClick={() => dispatch(toggleSelection())}
          className='Intro_btn-1'>
          Back this project
        </button>
        <button
          onClick={() => dispatch(bookmark())}
          className={`Intro_btn-2 ${bookmarked && "bookmarked"}`}
          data-name='Bookmark'>
          <svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <circle fill='' cx='28' cy='28' r='28' />
              <path fill='' d='M23 19v18l5-5.058L33 37V19z' />
            </g>
          </svg>
          <p className='Intro_btn_2-text'>
            {bookmark ? "Bookmarked" : "Bookmark"}
          </p>
        </button>
      </div>
      {isSelectionOpen && <Selected />}
    </article>
  );
};

export default Intro;
