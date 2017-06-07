import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autofacturador  from '../components/AutoFacturador';
import fetchPagosFilter from '../actions/receipt';
import { Container} from 'reactstrap';

class AutoFacturador extends Component {

	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchPagosFilter());
	}

	render(){
		const { unirop, unirlla}= this.props;
		const {props: { pagos } } = this;

		return (
			<Container>
				<Autofacturador  pagos={ pagos } unir={ unirop } unirlla={ unirlla } />
			</Container>
		);
	}


}
const getValues = state => {
		const values = state.getIn([ 'form', 'fieldArrays', 'values' ] )

		let unirop = "";
		let unirlla = "";
		if (values) {
			unirop = values.get('operacion');
			unirlla = values.get('operacion');
		}
		return{
			unirop,
			unirlla,
		}
	}
export default connect(getValues)(AutoFacturador);