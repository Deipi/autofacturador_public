export const FETCHED_PAGOS = 'FETCHED_PAGOS';

export const fetchPagos = (code) => (dispatch, getStore) => fetch(`http://localhost:3005/pagos?${ code }`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( pagos => dispatch({
	type: FETCHED_PAGOS,
	payload: pagos
})));

export default fetchPagos;
