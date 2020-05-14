import React from "react";
import Form from "../components/Form/Form";
import Notes from "../components/Notes/Notes";

export const Home = () => {
	const notes = new Array(3)
		.fill('')
		.map((_, i) => ({id: i, title: `Note ${i+1}`}))
	
	return (
		<>
			<Form/>
			<hr/>
			<Notes notes={notes}/>
		</>
	)
}