import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition} from 'react-transition-group';
import styled from "styled-components";

const AlertBlock = styled.div`
	overflow: hidden;
	
	&.alert-enter {
		opacity: 0;
	}
	&.alert-enter-active {
		opacity: 1;
		transition: all .500s ease-out;
	}
	&.alert-exit-active {
		opacity: 0;
		transition: all .350s ease-out;
	}
`


const Alert = () => {
	const {alert, hide} = useContext(AlertContext)
	
	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350
			}}
			classNames={'alert'}
			mountOnEnter
			unmountOnExit
		>
			<AlertBlock className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
				<strong>Pay Attention! </strong>
				{alert.text}
				<button onClick={hide} className="close" aria-label={"Close"}>
					<span aria-hidden={"true"}>&times;</span>
				</button>
			</AlertBlock>
		</CSSTransition>
	);
}

export default Alert