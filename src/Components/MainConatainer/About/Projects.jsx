import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSelection, updateSelected } from "../../../App/Slice";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = ({ id, title, content, left, plege }) => {
  const dispatch = useDispatch();
  const selectReward = () => {
    dispatch(updateSelected(id));
    dispatch(toggleSelection());
  };

  useEffect(() => {
    gsap.utils.toArray(".Project").forEach((project, i) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: project,
            start: "10% 70%",
          },
          stagger: 0.2,
          opacity: 1,
        }
      );
    });
  }, [id]);
  return (
    <>
      {id > 0 && (
        <div
          id={`Project${id}`}
          className={left === 0 ? "Project_disabled" : "Project"}>
          <div className='Project_head'>
            <h1 className='Project_head_title'>{title}</h1>
            <h2 className='Project_head_subTitle'>Pledge ${plege} or more</h2>
          </div>
          <p className='Project_content'>{content}</p>
          <div className='Project_bottom'>
            <p className='Project_left'>
              <span>{left}</span> left
            </p>
            <button
              onClick={() => left > 0 && selectReward()}
              className={left === 0 ? "Project_disabled_btn" : "Project_btn"}>
              {left === 0 ? "Out of Stock" : "Select Reward"}{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
