import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

const Board = (props) => {
	return (
		<div>
			<Flexbox flexDirection="column" minHeight="100vh">
				<Flexbox element="header" height="60px">
					Header
				</Flexbox>

				<Flexbox flexGrow={1}>
					<Flexbox flexGrow={1} flexDirection="row">
						<Flexbox flexGrow={1}>Main Board</Flexbox>
						<Flexbox width="300px">Sites</Flexbox>
					</Flexbox>
				</Flexbox>

				<Flexbox element="footer" height="60px">
					Footer
				</Flexbox>
			</Flexbox>
		</div>
	);
};

export default Board;
