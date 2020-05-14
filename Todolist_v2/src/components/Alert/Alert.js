import React from "react";

export default ({alert}) => {
	
	if(!alert) {
		return null;
	}
	
	return (
		<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
			<strong>Attantion!</strong>
			{alert.text}
			<button className="close" type={'button'} data-dismiss={'alert'} aria-label={'Close'}>
				<span aria-hidden={'true'}>&times;</span>
			</button>
		</div>
	)
	
}