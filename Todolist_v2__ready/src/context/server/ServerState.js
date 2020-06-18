import React, {useReducer} from 'react';
import {ServerContext} from "./serverContext";
import {serverReducer} from "./serverReducer";
import axios from 'axios';
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";
import {REACT_APP_DB_URL} from "../../API/URL";

const ServerState = ({children}) => {
	const initialState = {
		notes: [],
		loading: false,
	}
	const [state, dispatch] = useReducer(serverReducer, initialState)
	
	const showLoader = () => dispatch({type: SHOW_LOADER})
	
	const fetchNotes = async () => {
		showLoader()
		const res = await axios.get(`${REACT_APP_DB_URL}/notes`)
		
		dispatch({type: FETCH_NOTES, payload: res.data})
		
	}
	
	const addNote = async title => {
		const date = new Date().toLocaleDateString()
		const note = {
			title,
			date,
			id: (+new Date()).toString(16),
		}
		
		try {
			await axios.post(`${REACT_APP_DB_URL}/notes`, note)
			
			dispatch({type: ADD_NOTE, payload: note})
			
		} catch (e) {
			throw new Error(e.message);
		}
	}
	
	const removeNote = async (id, showAlert) => {
		await axios.delete(`${REACT_APP_DB_URL}/notes/${id}`)
		
		dispatch({
			type: REMOVE_NOTE,
			payload: id,
		})
		showAlert('Note removed')
	}
	
	return (
		<ServerContext.Provider value={{
			showLoader, addNote, removeNote, fetchNotes,
			loading: state.loading,
			notes: state.notes,
		}}>
			{children}
		</ServerContext.Provider>
	);
}

export default ServerState