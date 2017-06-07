export const FETCHED_PAGOS = 'FETCHED_PAGOS';

export const fetchPagos = (filter) => (dispatch, getStore) => fetch(`http://localhost:3005/pagos?${filter}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( pagos => dispatch({
	type: FETCHED_PAGOS,
	payload: pagos
})));

export default fetchPagos;
