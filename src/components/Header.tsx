import { userInfo } from "os";
import React, {
  Component,
  FunctionComponent,
  FunctionComponentElement,
  MouseEventHandler,
  useContext,
} from "react"; // importing FunctionComponent
import { UserContext } from "../util/context";
import style from "./Header.module.css";
import SideBarStyle from "./SideBar.module.css";
const toggleVisibility: MouseEventHandler = (event: React.MouseEvent) => {
  const sideBar = document.querySelector("#main-sidebar");
  sideBar?.classList.toggle(SideBarStyle["SideBar-Hidden"]);
};
export const Header = () => {
  const user = useContext(UserContext);
  return (
    <section className={style["header-section"]}>
      <div className={style["title-section"]}>
        <button onClick={toggleVisibility}>Expand</button>
        <p>MattBot</p>
      </div>
      <div className={style["profile-section"]}>
        {user ? (
          <img
            className={style["profile-avatar"]}
            src={`https://cdn.discordapp.com/avatars/${user?.userId}/${user?.avatar}`}
            alt="PFP"
          ></img>
        ) : (
          null
        )}
      </div>
    </section>
  );
};
