import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from './../../../utils/validators/validators';
import {Textarea} from './../../common/FormsControls/FormsControls';

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

const maxLength = maxLengthCreator(25);
const ProfileAddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostText"} placeholder={"Enter your post"}
        validate={[requiredField, maxLength]}></Field>
          <button >Add post</button>
      </form>
  )
}
const ProfileAddPostReduxForm = reduxForm({form: 'profilePost'})(ProfileAddPostForm);

export default MyPosts;
