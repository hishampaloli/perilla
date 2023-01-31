import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/projectView.module.scss";
import EditProjectComponent from "./EditProjectComponent";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsRight from "./ProjectDetailsRight";

const ProjectViewComponent = () => {
  const router = useRouter();
  const { project } = router.query;
  const { getSingleProject } = useActions();
  useEffect(() => {
    if (router.isReady) {
      getSingleProject("d", project!);
    }
  }, [router.isReady]);
  return (
    <div className={style.projectViewMain}>
      <EditProjectComponent />
      <div className={style.projectViewRow}>
        <ProjectDetails />
        <ProjectDetailsRight />
      </div>
    </div>
  );
};

export default ProjectViewComponent;
