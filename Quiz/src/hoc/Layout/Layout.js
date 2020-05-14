import React from "react";
import s from './Layout.module.scss'

export class Layout extends React.Component {
	render() {
		return (
			<div className={s.Layout}>
				
				
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}