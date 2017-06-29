import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form/immutable';
import fetchPagos from '../actions/receipt';

const selector = formValueSelector('fieldArrays');

class Button extends Component {
	constructor(props) {
		super(props);
		this.joincode = this.joincode.bind(this);
	}

	joincode() {
		const { dispatch } = this.props;
		//const code =`${this.props.NumOperacion}|${this.props.LlavePago}`,;
		const code =`${this.props.claves.getIn([0, 'NumerosOperacion'])}|${this.props.claves.getIn([0, 'LlavesPago'])}`;
		dispatch(fetchPagos(code));

	}

	render(){
		return (
			<div>
				<button data-style="zoom-in" type="button" className="btn btn-primary"
				 onClick={ this.joincode } ><i title="Buscar" className="fa fa-search fa-1x"/></button>
			</div>
		);
	}
}

const getValues = state => selector(state, 'NumOperacion', 'LlavePago','claves');

export default connect(getValues)(Button);