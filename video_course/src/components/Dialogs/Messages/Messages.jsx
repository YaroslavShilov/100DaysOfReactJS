import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Route} from "react-router-dom";

const Messages = (props) => {
	const messagesData = props.messagesData
		.map(i=>{ return (
			<Route path={`/dialogs/${i.id}`} render={() =>
				<Message message={i.message} key={i.id}/>
			}/>
		)});
	
	let newMessageElement = React.createRef();
	let addMessage = ()=> {
		let text = newMessageElement.current.value;
		alert(text);
	};
	
	return (
		<div className={s.messages}>
			{messagesData}
			<div>
				/** TODO continue to add store for textarea*/
				<textarea ref={newMessageElement} value={newMessagesText}/>
				<div>
					<button onClick={addMessage}>Reply</button>
				</div>
			</div>
		</div>
	)
};

export default Messages;