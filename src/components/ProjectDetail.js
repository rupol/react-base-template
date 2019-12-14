import React, { useState, useEffect } from "react";
import axios from "axios";

import Action from "./Action";

const ProjectDetail = props => {
  const [project, setProject] = useState({});
  const [actions, setActions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4000/api/projects/${props.match.params.id}`)
      .then(res => {
        console.log(res);
        setProject(res.data);
        setActions(res.data.actions);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = event => {
    event.preventDefault();
    console.log(event.target.value);
    axios
      .delete(`http://localhost:4000/api/projects/${event.target.value}`)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="main-section">
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
      <h3>{project.completed ? "Completed" : "Not Completed"}</h3>
      <div>
        <h2>Project Actions</h2>
        {actions.map(action => (
          <Action key={action.id} action={action} />
        ))}
      </div>
      <div className="project-buttons">
        <button
          onClick={handleDelete}
          value={project.id}
          className="fas fa-trash fa-xlg delete-button"
        ></button>
      </div>
    </div>
  );
};

export default ProjectDetail;
