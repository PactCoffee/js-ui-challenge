import React, { Component } from 'react';

import style from './style.css';

class Input extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
           text: this.props.text || ''
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.text
        });
    }
    handleChange(e) {
    	this.setState({ text: e.target.value });
    }
    render() {
    	return (
            <input
                className={ style.input }
                placeholder={ this.props.placeholder } 
                onChange={ ::this.handleChange } 
                value={ this.state.text } />
        );
    }

}

export default Input;