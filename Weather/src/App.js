import React from 'react';
import {Info} from "./components/Info";
import {Form} from "./components/Form";
import {Weather} from "./components/Weather";

const API_KEY = 'c6fd68d193c078d13d876aefb13e5f03\n';
/*api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}*/

class App extends React.Component {
	
	gettingWeather = async () => {
		const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
		const data = await api_url.json();
		console.log(data);
	}
	
	render() {
		return (
			<div className="App">
				<Info/>
				<Form/>
				<Weather/>
			</div>
		)
	}
  
}

export default App;
