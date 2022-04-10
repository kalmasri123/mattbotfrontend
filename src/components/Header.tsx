import React, { FunctionComponent } from "react"; // importing FunctionComponent
import style from "./Header.module.css";
import hamburger_icon from '../hamburger_icon.png'
export const Header: FunctionComponent = () => (
  <section className={style["header-section"]}>
    <div className={style["title-section"]}>
      <button>
        Expand
      </button>
      <p>MattBot</p>
    </div>
  </section>
);
