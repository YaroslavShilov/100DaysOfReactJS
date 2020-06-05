import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'


export const List = ({items, onRemove}) => {
	return (
		<TransitionGroup component={'ul'}> {/*compoonent - во что конвертировать данный транситио тег*/}
			{items.map(i => (
				<CSSTransition
					key={i.id}
					classNames={'orange'}
					timeout={750}
				>
					<li onClick={() => onRemove(i.id)}>{i.title}</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
}
