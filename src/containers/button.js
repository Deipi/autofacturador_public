import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form/immutable';
import fetchPagos from '../actions/receipt';
import qs from 'qs';

const selector = formValueSelector('fieldArrays');

class Button extends Component {
	constructor(props) {
		super(props);
		this.joincode = this.joincode.bind(this);
	}
	joincode() {
		const { dispatch, pagos } = this.props;
		const code =`${this.props.clubName}|${this.props.clubName1}`;
		dispatch(fetchPagos(qs.stringify({ code: [ code ] })))
	}
	render(){
		return (
			<div>
				<button data-style="zoom-in" type="button" className="btn btn-primary"
				 onClick={this.joincode}><i title="Buscar" className="fa fa-search fa-1x"/></button>
			</div>
		);
	}


}
const getValues = state => selector(state, 'clubName', 'clubName1', 'members');

export default connect(getValues)(Button);