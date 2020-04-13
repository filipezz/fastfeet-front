
import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function StarterAvatar({ name }) {
	const nameSplit = name.split(' ');

	return (
		<Container number={Math.floor(Math.random() * (5 + 1))}>
			<span>
				{nameSplit?.[0]?.[0]}
				{nameSplit?.[1]?.[0]}
			</span>
		</Container>
	);
}

StarterAvatar.propTypes = {
	name: PropTypes.string.isRequired,
};
