/**
 *
 */
import loader from './loader'
import initialState from './initialstate'

/** @namespace OCP */
const OCP = {
	Loader: loader,
	InitialState: initialState,
};

window['OCP'] = Object.assign({}, window.OCP, OCP)
