import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { PostType } from "../../../types/types";

//**TODO: need to finish this code//

const maxLength10 = maxLength(10);

type PropsType = {
  posts: Array<PostType>;
  addPost: (value: string) => void;
};

const MyPosts: React.FC<PropsType> = React.memo(({ posts, addPost }) => {
  const postsData = [...posts]
    .reverse()
    .map((post: PostType) => (
      <Post message={post.message} like={post.likesCount} key={post.id} />
    ));

  //**TODO any**//
  const onAddPost = (values: any): void => {
    addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddNewPostReduxForm onSubmit={onAddPost} />

      <div className={s.posts}>{postsData}</div>
    </div>
  );
});

type AddNewPostFormPropsType = {
  handleSubmit: any;
};
const AddNewPostForm: React.FC<AddNewPostFormPropsType> = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={Textarea}
        name={"newPostText"}
        validate={[requiredField, maxLength10]}
        placeholder={"Post message"}
      />
    </div>
    <button>Add post</button>
  </form>
);

const AddNewPostReduxForm = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
