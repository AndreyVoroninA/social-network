import React from "react";
import s from "./Header.module.css";

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.headerContent}>
            <img
               src="https://animaloilmaker.com/images/png-red-blood.png"
               alt="logo"
            />
            <div> social network</div>
         </div>
      </header>
   );
};

export default Header;
