import React, { useEffect, useRef } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ProjectInfoProps {
  visible: boolean;
  title: string;
  description: string;
  githubLink: string;
}
const ProjectInfo: React.FC<ProjectInfoProps> = (props) => {
  if (props.visible === true) {
    return (
      <div className="project-info">
        <span className="project-info-title"> {props.title} </span>
        <span className="project-info-description">{props.description} </span>
        <a className="project-info-gh-link" href={props.githubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProjectInfo;
