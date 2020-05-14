import React from "react";
import './Notes.scss'

export default ({notes}) => {
	return (
		<ul className={'list-group'}>
			{notes.map(i => (
				<li 
					className={'list-group-item note'}
					key={i.id}
				>
					<div className={'note_main'}>
						<h2 className={'note_title'}>{i.title}</h2>
						<p className={'note_time'}>{new Date().toLocaleDateString()}</p>
					</div>
					
					<button 
						className="btn btn-outline-danger btn-sm" 
						type={'button'}
					>&times;</button>
				</li>
			))}
			
		</ul>
	)
}