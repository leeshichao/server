/**
 *
 */
import loader from './loader'
import collaboration from './collaboration'

/** @namespace OCP */
const OCP = {
	Loader: loader,
	Collaboration: collaboration
};

window['OCP'] = Object.assign({}, window.OCP, OCP)
