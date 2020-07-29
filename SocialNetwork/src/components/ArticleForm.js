import React, {useState} from 'react';

const ArticleForm = ({onSubmit, errors, initialValues}) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [description, setDescription] = useState('')
	const [tagList, setTagList] = useState('')
	
	const handleSubmit = e => {
		e.preventDefault()
		onSubmit({foo: 'foo'})
	}
	
	return (
		<div className="editor-page">
			<div className="container-page">
				<div className="row">
					<div className="col-md-10 offset-md-1 col-xs-12">
						BackendErrorMessages
						<form onSubmit={handleSubmit}>
							<fieldset>
								<fieldset>
									
								</fieldset>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArticleForm