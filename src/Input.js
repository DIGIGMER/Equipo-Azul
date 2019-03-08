import React, { Component } from 'react';

class Input extends Component {

	state = {
		value: ""
	};

	constructor(props){
		super(props);

		console.log(props);

		this._label = props.label0;
	}

	componentWillMount(){
		this._label = this.props.label1;
		console.log(1);
	}

	componentDidMount(){
		this._label = this.props.label2;
		console.log(3, this._label);
	}

	componentWillReceiveProps(nextProps){
		console.log(this.props, nextProps);
		this._label = nextProps.label2;
	}

	render(){
		console.log(2);
		return (
			<div>
				<label>{ this._label }: ({ this.state.value })</label>
				<input
					onChange={({ target: { value } }) => {
						// input_tag.target.value
						console.log(value);
						this.setState({ value: value });
					}}
				/>
			</div>
		);
	}

}

export default Input;