import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import classNames from 'classNames';

import style from './style.css';

class Icon extends Component {
    render() {
        const iconClasses = classNames({ [ style.icon ]: true, [ style.unclicked ]: !this.props.clicked, [ style.clicked ]: this.props.clicked });
        return (
            <Isvg className={ iconClasses } src={ '../../icons/' + this.props.name + '.svg' } />
        );
    }
}

export default Icon;