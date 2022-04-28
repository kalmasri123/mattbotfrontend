import { MouseEvent, MouseEventHandler } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./AddKeyword.module.css";
// import { create } from "react-router-dom";
const ID_ADD_KEYWORD_ROOT = "ID_ADD_KEYWORD_ROOT";

export const AddKeyword = () => {
  const navigate = useNavigate();

  const returnToParent = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // console.log(target.id)
    if (target.id == ID_ADD_KEYWORD_ROOT) {
      navigate("../");
    }
  };
  return (
    <div
      className={style["root"]}
      onClick={returnToParent}
      id={ID_ADD_KEYWORD_ROOT}
    >
      <div className={style["content"]}>
        <section className="route-header">
          <h5 className="route-header-text">Add Keyword</h5>
        </section>
      </div>
    </div>
  );
};
