import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { progressPercent } from "../../App/Slice";
const Backers = () => {
  const { targetAmount, currentAmount, totalBacker, daysLeft, progress } =
    useSelector((state) => state);
  const addComa = new Intl.NumberFormat("en-US");
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(progressPercent());
  }, [dispatch, progress, currentAmount, totalBacker]);
  return (
    <article id='Backers' className='Backers'>
      <div className='Backers_contain'>
        <div className='Backers_div'>
          <p className='Backers_title'>${addComa.format(currentAmount)}</p>
          <p className='Backers_subTitle'>
            of ${addComa.format(targetAmount)} backed
          </p>
        </div>
        <div className='Backers_div'>
          <p className='Backers_title'>{addComa.format(totalBacker)}</p>
          <p className='Backers_subTitle'>total backers</p>
        </div>
        <div className='Backers_div'>
          <p className='Backers_title'>{daysLeft}</p>
          <p className='Backers_subTitle'> days left</p>
        </div>
      </div>
      <div className='Backers_progress'>
        <div className='Backers_progress_bar'>
          <div
            className='Backers_progress_amount'
            style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </article>
  );
};

export default Backers;
