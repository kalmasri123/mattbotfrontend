import { Link } from "react-router-dom";
import style from './buttons.module.css';
export const MedButton = (props: any) => {
  return (
    <Link to={props.link}>
      <div className={style['med-button']}>{props.children}</div>
    </Link>
  );
};
