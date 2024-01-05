import React from "react";
import "./index.css";

function Project() {
  return (
    <div className="project-information">
      <h1>Heading Project</h1>
      <p>
        I created this personal project in order to show how to create an
        interface in Figma using a portfolio as an example.
      </p>
      <button className="project-button">View Project</button>
      <img
        src="right-side-image.jpg"
        alt="Right"
        className="right-side-image"
      />
    </div>
  );
}

export default Project;
