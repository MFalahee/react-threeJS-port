import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

interface ProjectPageProps {
  visible: boolean;
}
interface Project {
  id: number;
  title: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  imageURL?: string;
  githubURL?: string;
  hostedURL?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  useEffect(() => {
    // load projects from ../../utils/projects.json
  });
  return <iframe className="project-page-container"></iframe>;
};

export default ProjectPage;
