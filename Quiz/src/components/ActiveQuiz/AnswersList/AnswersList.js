import React from "react";
import s from './AnswersList.module.scss'
import AnswerItem from "./AnswerItem/AnswerItem";

export default props => (
	<ul className={s.AnswersList}>
		{props.answers.map((i,inx) => {
			return (
				<AnswerItem
					key={inx}
					answer={i}
					onAnswerClick={props.onAnswerClick}
					state={props.state ? props.state[i.id] : null}
				/>
			)
		})}
	</ul>
)