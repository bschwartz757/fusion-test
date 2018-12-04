import React from 'react';
import { Card } from 'baseui/card';
import { Button, KIND } from 'baseui/button';

import { connect } from 'react-redux';

import { increment } from '../Actions/Increment.js';

const CardButton = ({ increment, counter }) => (
	<div>
		<h2>Sample Redux Counter</h2>
		<p>Current Count: {counter}</p>
		<Button onClick={() => increment(1)}
			kind={KIND.success}>Increment by one</Button>
		<Button onClick={() => increment(2)}
			kind={KIND.danger}>Increment by two</Button>
	</div>
)

const CardComponent = (props) => {

	const { increment, counter } = props;
	return (
		<Card
			action={<CardButton increment={increment} counter={counter} />}
			counter={counter}
			title="Card title goes here"
		>
			<withThemeHOC>
				{props.children}
			</withThemeHOC>
		</Card>
	);
}

const mapStateToProps = state => {
	console.log('mapStateToProps: ', state)

	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = {
	increment: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
