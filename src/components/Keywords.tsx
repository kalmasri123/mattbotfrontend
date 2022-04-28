import { useContext } from "react";
import { UserContext } from "../util/context";
import style from "./Keywords.module.css";
import { MedButton } from "./buttons";
import { Outlet } from "react-router-dom";
export const Keywords = function (props:any) {
  console.log(props.children)
  let userContext = useContext(UserContext);
  return (
    <section>
      <section className="route-header">
        <h5 className="route-header-text">Keywords</h5>
        <MedButton link="./create">Create</MedButton>
        <Outlet/>
      </section>
      <div></div>
    </section>
  );
};
