import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "./Project";

import loader from "../img/loader.gif";

function ProjectsList(props) {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/api/projects")
      .then(res => {
        console.log(res);
        setProjects(res.data);
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
        axios
          .get("http://localhost:4000/api/projects")
          .then(res => {
            console.log(res);
            setProjects(res.data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleEdit = event => {
    event.preventDefault();
  };

  return (
    <div className="main-section">
      <h1>My projects</h1>
      {!isLoading && projects.length ? (
        <div>
          {projects.map(project => (
            <Project
              key={project.id}
              project={project}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      ) : (
        <div>
          <img src={loader} alt="" className="loader" />
          <h2>...waiting for projects...</h2>
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
