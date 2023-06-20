import React, { useEffect, useState, useRef } from "react";
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
  const screenRef = useRef<HTMLElement>(null!);
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
      portal={screenRef}
      position={[25.85, 3.44, 12.71]}
      occlude
      fullscreen
      transform
      as="div"
      wrapperClass="project-page-container"
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
      }}
      rotation-y={Math.PI - 0.3}
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
