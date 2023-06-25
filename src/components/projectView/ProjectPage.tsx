import React, { useEffect, useState, useRef } from "react";
import { Html } from "@react-three/drei";
import ProjectCard from "./ProjectCard";

interface ProjectPageProps {
  visible: boolean;
  transform: boolean;
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
  const [transformBool, setTransformBool] = useState(true); // toggle off when laptop is in view to prevent screen from lookin weird
  const [laptopScreenStyle, setLaptopScreenStyle] = useState({
    width: "85px",
    height: "52px",
    overflow: "hidden",
    border: "1px solid black",
    background: "white",
  }); 
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
        console.log("Error retrieving project information, try again later.");
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
      position={[25.6, 3.95, 12.11]}
      transform={transformBool}
      occlude
      as="div"
      wrapperClass="project-page-container"
      style={laptopScreenStyle}
      rotation-y={2.8}
      rotation-x={0.04}
      rotation-z={-0.01}
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
