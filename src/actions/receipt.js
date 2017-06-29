export const FETCHED_PAGOS = 'FETCHED_PAGOS';
import qs from 'qs';

export const fetchPagos = (code) => (dispatch, getStore) => fetch(`http://localhost:3005/pagos?${qs.stringify({ code: [ code ] })}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( pagos => dispatch({
	type: FETCHED_PAGOS,
	payload: pagos
})));

export default fetchPagos;
