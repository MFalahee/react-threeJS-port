import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

import ProjectCard from "./ProjectCard";

interface ProjectPageProps {
  visible: boolean;
}
interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageURL: string;
  githubURL: string;
  hostedURL: string;
  skills: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hidden, set] = useState(false);
  const getProjects = () => {
    fetch("projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("Error retrieving project information");
        console.error(err);
      });
  };

  useEffect(() => {
    if (projects.length === 0) {
      getProjects();
    }
  }, []);
  return (
    <Html
      occlude
      fullscreen
      style={{
        transition: "all 0.5s",
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0.9 : 1})})`,
      }}
      as="div"
      wrapperClass="project-page-container"
    >
      {projects?.map((project, key) => {
        return (
          <ProjectCard
            key={key}
            id={project.id}
            title={project.title}
            description={project.shortDescription}
            photoName={project.imageURL}
            githubLink={project.githubURL}
            skills={[]}
            visible={props.visible}
            list={[]}
          />
        );
      })}
    </Html>
  );
};

export default ProjectPage;
