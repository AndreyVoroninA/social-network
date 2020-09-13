import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.posts.map((p) => (
    <Post message={p.message} imgsrc={p.imgsrc} likesCount={p.likesCount} id={p.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.myPost}>
      <h3>My posts</h3>
      <div className={s.addPost}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
          <button onClick={onAddPost}>Add post</button>
      </div>
      
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;
