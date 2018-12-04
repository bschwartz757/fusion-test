import React from 'react';
import { Notification, KIND } from 'baseui/notification';

const Alert = (props) => {

	return (
		<Notification kind={KIND.warning}>
			This is a warning!!
	</Notification>
	)

}

export default Alert