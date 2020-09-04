import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
	margin: 0;
	padding: 20px;
	font-size: 20px;
	text-align: center;
`

const ErrorMessage = () => {
	return (
		<Error>something goes wrong</Error>
	);
}

export default ErrorMessage