import {maxLength, requiredField} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field
				component={Textarea}
				validate={[requiredField, maxLength50]}
				name={'newMessageBody'}
				placeholder="Enter your message"
			/>
		</div>
		<button>Reply</button>
	</form>
)

export default reduxForm({
	form: 'dialogAddMessageForm'
})(AddMessageForm)