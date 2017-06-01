import React, { Component } from 'react';
import { connect } from 'react-redux';
import    Autofacturador  from '../components/AutoFacturador';
import { Container} from 'reactstrap';

class AutoFacturador extends Component {
	render(){
		return (
			<Container>
				<Autofacturador/>
			</Container>
		);
	}
}
export default connect()(AutoFacturador);