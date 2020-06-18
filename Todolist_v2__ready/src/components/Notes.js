import React from 'react';
import Note from "./Note";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Notes = ({notes, onRemove}) => {

	const list = notes.map(({id, ...arg}) => (
		<CSSTransition 
			key={id}
			classNames={'note'}
			timeout={800}
		>
			<Note
				onRemove={() => onRemove(id)}
				{...arg}
			/>
		</CSSTransition>
	))

	return (
		<TransitionGroup className={"list-group"} component={"ul"}>
			{list}
		</TransitionGroup>
	);
}

export default Notes