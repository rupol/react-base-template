import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  return (
    <div className="project-card">
      <h2 className="project-name">
        <Link exact to={`/project/${props.project.id}`}>
          {props.project.name}
        </Link>
      </h2>

      <h3>{props.project.description}</h3>
      <h3 className="emphasized-text">
        {props.project.completed ? "Completed" : "Not Completed"}
      </h3>
      <div className="project-buttons">
        <button
          onClick={props.handleDelete}
          value={props.project.id}
          className="fas fa-trash fa-xlg delete-button"
        ></button>
      </div>
    </div>
  );
};

export default Project;
