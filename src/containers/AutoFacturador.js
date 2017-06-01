import React, { Component } from 'react';
import { connect } from 'react-redux';
import    Autofacturador  from '../components/AutoFacturador';
import fetchPagos from '../actions/receipt';
import { Container} from 'reactstrap';

class AutoFacturador extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchPagos());
	}
	render(){
		return (
			<Container>
				<Autofacturador/>
			</Container>
		);
	}
}
export default connect()(AutoFacturador);