import React from "react";
import Projects from "./Projects";
import { useSelector } from "react-redux";

const About = () => {
  const state = useSelector((state) => state.data);
  return (
    <article id='About' className='About'>
      <h1 className='About_title'>About this project</h1>
      <p className='About_p1'>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className='About_p2'>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {state.map((project) => (
        <Projects
          id={project.id}
          key={project.id}
          title={project.title}
          plege={project.pledge}
          left={project.left}
          content={project.content}
        />
      ))}
    </article>
  );
};

export default About;
