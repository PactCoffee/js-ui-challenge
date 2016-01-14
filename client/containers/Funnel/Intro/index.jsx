
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-simple-router';
import classNames from 'classNames';

import * as UserActions from '../../../actions/user';
import Input from '../../../components/Input';

import style from './style.css';

class Intro extends Component {
    componentWillMount() {
        const { dispatch, user } = this.props;
    }
    handleSubmit() {
        const inputs = Object.keys(this.refs);
        const values = inputs.reduce((o, v, i) => {
            o[v] = this.refs[v].state.text;
            return o;
        }, {});
        const setUserData = UserActions.setUserData(values);
        setUserData(this.props.dispatch);
        this.props.dispatch(push('/funnel/brew'));

    }
    render() {
        const { user, actions } = this.props;
        const fieldStyles = classNames({ [ style.field ]:true, [ style.with_bottom ]: true });
        return (
            <div className={ style.intro }>
                <h2 className={ style.title } >{ "Let's get you some coffee" }</h2>
                <div className={ style.form } >
                    <div className={ fieldStyles } >
                        <label>
                            First name {' '}
                            <Input ref="first_name" placeholder=" " text={ user.first_name } />
                        </label>
                    </div>
                    <div className={ fieldStyles } >
                        <label>
                            Last name {' '}
                            <Input ref="last_name" placeholder=" " text={ user.last_name } />
                        </label>
                    </div>
                    <div className={ style.field } >
                        <label>
                            Email address {' '}
                            <Input ref="email" placeholder=" " text={ user.email } />
                        </label>
                    </div>
                </div>
                <div className={ style.button }>
                    <button className={ style.btn_element } onClick={ ::this.handleSubmit } >
                        GET STARTED
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(
    mapStateToProps
)(Intro);