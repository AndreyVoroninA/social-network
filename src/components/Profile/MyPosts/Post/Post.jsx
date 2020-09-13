import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src={props.imgsrc} alt="ava " />
         {props.message}
         <div>
            <span className={s.likesCount}>Like {props.likesCount}</span>
         </div>
      </div>
   );
};

export default Post;
