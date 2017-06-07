import { fromJS } from 'immutable';
import { FETCHED_PAGOS_FILTER } from '../actions/receipt';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_PAGOS_FILTER:
			return fromJS(action.payload);
		default:
			return state;
	}
}
