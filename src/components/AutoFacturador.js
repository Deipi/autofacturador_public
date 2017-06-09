import React from 'react';
import {Field,reduxForm,FieldArray} from 'redux-form/immutable'
import {Col, Row ,Card } from 'reactstrap';
import { connect } from 'react-redux';
import Button from '../containers/button';

const renderField = ({input,placeholder,type, meta: {touched, error}}) => (
  <div>
	<div>
	  <input className="form-control" {...input} placeholder={placeholder} type={type} />
	  {touched && error && <span>{error}</span>}
	</div>
  </div>
)

const renderMembers = ({fields,  meta: {error, submitFailed}}) => (
		<ul>
			<div>
				<i className="fa fa-plus-circle icon-green ro pull-right"  onClick={() => fields.push({})} />
				{submitFailed && error && <span>{error}</span>}
			</div>
			{fields.map((member, index) => (
				<div key={index}>
					<br/>
					<Row>
						<Col className="col-sm-6" >
							<Field
								placeholder="Numero de operacion"
								name={`${member}.firstName`}
								type="text"
								component={renderField}
							/>
						</Col>
						<Col className="col-sm-5">
							<Field
								name={`${member}.lastName`}
								type="text"
								placeholder="Llave de Pago"
								component={renderField}
							/>
						</Col>
					</Row>
					<i onClick={() => fields.remove(index)}
					className="fa fa-trash-o pull-right" aria-hidden="true"></i>
				</div>
			))}
				<div>
					<a href="#" onClick={() => fields.push({})} >Agregar otro pago a su factura</a>
				</div>
		</ul>
)
//{pagos.map(z=>z.get('code'))}

class AutoFacturador extends React.Component {
	render() {
	const { state }=this;

	return (
		<div>
			<div>
				<h3>Generar su propia factura</h3>
			</div>
			<form id="autoinvoice">
				<fieldset>
					<legend>Información del pago</legend>
				</fieldset>
				<hr/>
				<Row>
					<Col className="col-sm-6">
						<Row>
							<Col className="col-sm-6">
								<Field
									placeholder="Numero de operación"
									name="clubName"
									type="text"
									component={renderField}
									onChange={ this.props.onTextUpdate }
								/>
							</Col>
							<Col className="col-sm-5">
								<Field
									placeholder="Llave de pago"
									name="clubName1"
									type="text"
									component={renderField}
									onChange={ this.props.onTextUpdate }
								/>
							</Col>
						</Row>
						<FieldArray name="members" component={renderMembers} />
						<br/>
						<Button/>
					</Col>
					<Col className="col-md-6">
						<Card block>
							<h5>{ this.props.pagos}</h5>
							<ul>
								<li>Conceptos: </li>
								<ul>
									<li>tacos</li>
									<li>refrescco</li>
								</ul>
								<li>Total: </li>
							</ul>
						</Card>
					</Col>
				</Row>
					<hr/>
					<legend>Datos Fiscales</legend>
				<Row>
					<div className="col-sm-4">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="RFC"></input>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Nombre"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-6">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Calle"></input>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Número exterior"></input>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Número interior"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-2">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="	Código postal"></input>
						</div>
					</div>
					<div className="col-sm-5">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Colonia"></input>
						</div>
					</div>
					<div className="col-sm-5">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Municipio"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-4">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Ciudad"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-4">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Estado"></input>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Pais"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-8">
						<div className="controls">
							<input className="textinput textInput form-control required tt-hint" type="text" placeholder="Notas del contribuyente"></input>
						</div>
					</div><br/><br/>
					<div className="col-sm-8">
						<p>Las notas aquí agregadas se incluirán (únicamente) en la representación impresa de la factura</p>
					</div>
					<div className="add-new text-right col-sm-12">
						<button data-style="zoom-in" type="submit" className="btn btn btn-primary btn-lg ladda-button">Facturar</button>
					</div>
				</Row>
			</form>
		</div>
	);
}
}

export default connect(state => ({pagos: state.get('pagos')}))(reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
})(AutoFacturador))