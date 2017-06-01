import { fromJS } from 'immutable';
import { FETCHED_PAGOS } from '../actions/receipt';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_PAGOS:
			return fromJS(action.payload);
		default:
			return state;
	}
}
