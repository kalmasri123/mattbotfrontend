import { FunctionComponent } from "react"; // importing FunctionComponent
import style from "./SideBar.module.css";
export const SideBar: FunctionComponent = () => (
  <aside id="main-sidebar" className={style["SideBar"]}>
    <div className={style["sidebar-contents"]}>
      <p>MattBot</p>
    </div>
  </aside>
);
