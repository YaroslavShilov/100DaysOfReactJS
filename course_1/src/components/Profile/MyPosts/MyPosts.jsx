import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10)

const MyPosts = (props) => {
	
	const postsData = props.posts
		.map(i=><Post message={i.message} like={i.likesCount} key={i.id}/>);
	
	const onAddPost = (values) => {
		props.addPost(values.newPostText)
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<AddNewPostReduxForm onSubmit={onAddPost}/>

			<div className={s.posts}>
				{postsData}
			</div>
		</div>
	)
};


const AddNewPostForm = (props) => (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field
				component={Textarea}
				name={'newPostText'}
				validate={[requiredField, maxLength10]}
				placeholder={'Post message'}
			/>
		</div>
		<button>Add post</button>
	</form>
)

const AddNewPostReduxForm = reduxForm({
	form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;