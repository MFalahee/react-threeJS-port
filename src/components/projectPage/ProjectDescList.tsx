import React from "react";
// This is the bit displayed after clicking on one of the project cards- for information about the project, skills used, and so on.
interface ProjectDescListProps {
  visible: boolean;
  list: string[];
}
const ProjectDescList: React.FC<ProjectDescListProps> = (props) => {
  if (props.visible === true) {
    return (
      <div className="projectInfo-list">
        {props.list.map((item, key) => {
          return <p key={key}> {item} </p>;
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProjectDescList;
