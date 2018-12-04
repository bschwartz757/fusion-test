// @flow
import { combineReducers } from 'redux';
import App from 'fusion-react';

import { FetchToken } from 'fusion-tokens';
import Redux, {
	ReduxToken,
	ReducerToken,
	EnhancerToken,
	GetInitialStateToken,
	PreloadedStateToken,
} from 'fusion-plugin-react-redux';
import ReduxActionEmitterEnhancer from 'fusion-plugin-redux-action-emitter-enhancer';
import UniversalEvents, {
	UniversalEventsToken,
} from 'fusion-plugin-universal-events';

import getInitialState from './initialState.js';
import counter from './Reducers/Counter';

import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';

import root from './root.js';

export default () => {
	const app = new App(root);
	app.register(Styletron);
	app.register(Router);
	// app.register(UniversalEventsToken, UniversalEvents);

	app.register(ReduxToken, Redux);
	// app.register(EnhancerToken, ReduxActionEmitterEnhancer);
	// __BROWSER__ && app.register(FetchToken, fetch);
	// __NODE__ && app.register(GetInitialStateToken, getInitialState);
	// app.register(PreloadedStateToken, { counter: 0 });

	const reducer = combineReducers({
		counter,
	});
	app.register(ReducerToken, reducer);

	return app;
};
