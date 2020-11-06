import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className={s.headerContent}>
            <img
               src="https://cdn.pixabay.com/photo/2013/07/13/14/05/troll-162078_1280.png"
               alt="logo"
            />
            <div className={s.logo}> social network</div>
            <div className={s.login}>
               {props.isAuth 
               ? <div>
                  {props.login}
                  <div><button className={s.but} onClick={props.logoutThunk}>log off</button></div>
               </div> 
               
               : <NavLink to='/login'>Зарегестрироваться</NavLink>}
            </div>
         </div>
      </header>
   );
};

export default Header;
