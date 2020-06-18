import React, {useContext, useEffect} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {ServerContext} from "../context/server/serverContext";
import Loader from "./Loader";
import {AlertContext} from "../context/alert/alertContext";

const Home = () => {

	const {loading, notes, fetchNotes, removeNote} = useContext(ServerContext);
	const {show} = useContext(AlertContext);
	
	useEffect(() => {
		fetchNotes();
		// eslint-disable-next-line
	}, [])
	
	return (
		<div>
			<Form/>
			{
				loading
				? <Loader/>
				: <Notes notes={notes} onRemove={(id) => removeNote(id, show)}/>
			}
		</div>
	);
}

export default Home