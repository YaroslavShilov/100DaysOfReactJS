import React, { Component } from 'react';
import ThemeJSX from './test/themeJSX';
import Theme_lists_and_keys from './test/theme_lists_and_keys'

class AppTest extends Component {
	render() {
		return (
			<div className="App">
				<ThemeJSX />
				<Theme_lists_and_keys />
			</div>
		)
	}
}

export default AppTest;
