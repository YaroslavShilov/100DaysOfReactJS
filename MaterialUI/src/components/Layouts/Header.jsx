import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";

export const Header = (props) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="headline" color={"inherit"}>
					Exercise Data base
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
