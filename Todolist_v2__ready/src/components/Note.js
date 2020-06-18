import React from 'react';
import styled from "styled-components";

const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	strong {
		margin-right: 15px;
	}
	span {
		margin-left: auto;
		margin-right: 15px;
		font-size: 12px;
	}
	&.note-exit-active {
		animation: note .8s ease-out forwards;
	}
	&.note-enter-active {
	animation: note .8s ease-in alternate-reverse;
	}

	@keyframes note {
		0% {
			transform: translateX(0);
		}
		30% {
			opacity: .7;
			transform: translateX(30px);
		}
		100% {
			opacity: 0;
			transform: translateX(-200px);
		}
	}
`;


const Note = ({title, date, onRemove}) => (
	<Item className={"list-group-item"}>
		<strong>{title}</strong>
		<span>{date}</span>
		<button
			className="btn btn-outline-danger btn-sm"
			onClick={onRemove}
		>
			&times;
		</button>
	</Item>
);

export default Note