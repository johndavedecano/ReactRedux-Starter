import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="container"></div>
		)
	}
}

Main.contextTypes = {
    router  : React.PropTypes.object.isRequired
};

export default connect(function(state) {
	return {

	};
})(Main);