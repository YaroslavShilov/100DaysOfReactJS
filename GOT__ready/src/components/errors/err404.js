import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Error = styled.p`
	padding: 20px;
	color: white;
	font-size: 20px;
	text-align: center;
`

const Error404 = () => {
	return (
		<Error>
			<h1>Error404</h1>
			<Link to={'/'} className={'btn btn-info'}>Go Home</Link>
		</Error>
	);
}

export default Error404