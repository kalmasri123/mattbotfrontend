import { FunctionComponent } from "react"; // importing FunctionComponent
import { Link, BrowserRouter as Router } from "react-router-dom";
import style from "./SideBar.module.css";
export const SideBar = () => (
  <aside id="main-sidebar" className={style["SideBar"]}>
    <div className={style["sidebar-contents"]}>
      <li className={style["list-header"]}>Detectors</li>
      <div className={style["list-container"]}>
        <Link to="/keywords">
          <div className={style["nav-button"]}>
            {/* <Link to='/keywords'> */}
            <span className={style["nav-title"]}>Keywords</span>
            {/* </Link> */}
          </div>
        </Link>
      </div>
    </div>
  </aside>
);
