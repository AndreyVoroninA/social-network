import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsEl = props.posts.map((p) => (
    <Post message={p.message} imgsrc={p.imgsrc} likesCount={p.likesCount} id={p.id} />
  ));

  let addPost = (value) => {
    return (
      props.addPost(value.newPostText)
    )
  }

  return (
    <div className={s.myPost}>
      <h3>My posts</h3>
      <ProfileAddPostReduxForm onSubmit={addPost}/>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

const ProfileAddPostForm = (props) => {
  return (
    <form className={s.addPost} onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPostText"} placeholder={"Enter your post"}></Field>
          <button >Add post</button>
      </form>
  )
}
const ProfileAddPostReduxForm = reduxForm({form: 'profilePost'})(ProfileAddPostForm);

export default MyPosts;
