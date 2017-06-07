import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autofacturador  from '../components/AutoFacturador';
import fetchPagos from '../actions/receipt';
import { Container} from 'reactstrap';

const selector =state =>({
	pagos: state.get('pagos')
})

class AutoFacturador extends Component {

	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchPagos());
	}

	render(){
		const {props: { pagos } } = this;

		return (
			<Container>
				<Autofacturador  pagos={ pagos }/>
			</Container>
		);
	}
}
export default connect(selector)(AutoFacturador);