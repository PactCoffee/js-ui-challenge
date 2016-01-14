import React, { Component } from 'react';
import { push } from 'redux-simple-router';

import * as UserActions from '../../actions/user';
import Icon from '../Icon/';

import style from './style.css';

class Close extends Component {
	handleClick() {
		const deleteUser = UserActions.deleteUser();
        deleteUser(this.props.dispatch);
		this.props.dispatch(push('/funnel/intro'));
	}
	render() {
		return (
            <div onClick={ ::this.handleClick } className={ style.close }>
                X
            </div>
		);
	}
}

export default Close;