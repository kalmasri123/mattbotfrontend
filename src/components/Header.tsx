import React, { FunctionComponent, MouseEventHandler } from "react"; // importing FunctionComponent
import style from "./Header.module.css";
import SideBarStyle from "./SideBar.module.css";
const toggleVisibility: MouseEventHandler = (event: React.MouseEvent) => {
  const sideBar = document.querySelector("#main-sidebar");
  sideBar?.classList.toggle(SideBarStyle["SideBar-Hidden"]);
};
export const Header: FunctionComponent = () => (
  <section className={style["header-section"]}>
    <div className={style["title-section"]}>
      <button onClick={toggleVisibility}>Expand</button>
      <p>MattBot</p>
    </div>
  </section>
);
