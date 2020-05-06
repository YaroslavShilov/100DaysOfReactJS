import React from 'react';

export const Weather = ({city, country, temp, pressure, sunset, error}) => (
	<div className={'infoWeath'}>
		{city &&
		<>
			<p>Местоположение: {city}, {country}</p>
			<p>Температура: {temp}</p>
			<p>Давление: {pressure}</p>
			<p>Заход солнца: {sunset}</p>
		</>
		}

		<p className={'error'}>
			{error}
		</p>



	</div>
)