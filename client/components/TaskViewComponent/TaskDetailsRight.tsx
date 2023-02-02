import React from "react";
import style from "../../styles/taskView.module.scss";

const TaskDetailsRight = () => {
  return (
    <div className={style.taskDetailsRight}>
      <h3>Assigned to</h3>
      <div className={style.innerBox}>
        <img
          src="https://www.gravatar.com/avatar/2f6f392737383e2526e6ece216f904db?d=retro"
          alt=""
        />
        <div className={style.box}>
          <div>
            <strong>Name : </strong>
            <p>Hpliosd</p>
          </div>

          <div>
            <strong>Email : </strong>
            <p>Hpliosd</p>
          </div>

          <div>
            <strong>Employee ID : </strong>
            <p>9873-FT</p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default TaskDetailsRight;
