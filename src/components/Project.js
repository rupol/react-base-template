import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  return (
    <div className="project-card">
      <Link exact to={`/project/${props.project.id}`}>
        <h2 className="project-name">{props.project.name}</h2>
      </Link>
      <h3>{props.project.description}</h3>
      <h3>{props.project.completed ? "Completed" : "Not Completed"}</h3>
      <div className="project-buttons">
        <button
          onClick={props.handleEdit}
          value={props.project.id}
          className="fas fa-edit fa-xlg edit-button"
        ></button>
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
