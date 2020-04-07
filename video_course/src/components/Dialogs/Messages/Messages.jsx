import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {
	const messagesData = props.messagesData
		.map(i=><Message message={i.message} key={i.id}/>);
	
	
	return (
		<div className={s.messages}>
			{messagesData}
		</div>
	)
};

export default Messages;