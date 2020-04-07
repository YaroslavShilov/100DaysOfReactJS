import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {
	const messagesData = props.messagesData
		.map(i=><Message message={i.message} key={i.id}/>);
	
	let newMessageElement = React.createRef();
	let addMessage = ()=> {
		let text = newMessageElement.current.value;
		alert(text);
	};
	
	return (
		<div className={s.messages}>
			{messagesData}
			<div>
				<textarea ref={newMessageElement}></textarea>
				<div>
					<button onClick={addMessage}>Reply</button>
				</div>
			</div>
		</div>
	)
};

export default Messages;