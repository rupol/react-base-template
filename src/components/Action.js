import React from "react";

const Action = props => {
  return (
    <div className="project-card">
      <h3>{props.action.description}</h3>
      <h3>Notes: {props.action.notes}</h3>
      <h3 className="emphasized-text">
        {props.action.completed ? "Completed" : "Not Completed"}
      </h3>
    </div>
  );
};

export default Action;
