
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-simple-router';
import classNames from 'classNames';

import * as UserActions from '../../../actions/user';
import Input from '../../../components/Input';
import Close from '../../../components/Close';

import style from './style.css';

class Address extends Component {
    componentWillMount() {
        const { dispatch, user } = this.props;
    }
    handleSubmit() {
        const inputs = Object.keys(this.refs);
        const values = inputs.reduce((o, v, i) => {
            o[v] = this.refs[v].state.text;
            return o;
        }, {});
        const setUserData = UserActions.setUserData({ address: values });
        setUserData(this.props.dispatch);
        this.props.dispatch(push('/funnel/confirm'));

    }
    render() {
        const { user, actions } = this.props;
        const fieldStyles = classNames({ [ style.field ]:true, [ style.with_bottom ]: true });
        const address = user.address || {};
        return (
            <div className={ style.address }>
                <h2 className={ style.title } >{ "Please, let us know your address" }</h2>
                <div className={ style.form } >
                    <div className={ fieldStyles } >
                        <label>
                            Full Name {' '}
                            <Input ref="full_name" placeholder=" " text={ address.full_name || user.first_name + ' ' + user.last_name } />
                        </label>
                    </div>
                    <div className={ fieldStyles } >
                        <label>
                            Company {' '}
                            <Input ref="company" placeholder=" " text={ address.company } />
                        </label>
                    </div>
                    <div className={ fieldStyles } >
                        <label>
                            Address line 1 {' '}
                            <Input ref="address_line_1" placeholder=" " text={ address.address_line_1 } />
                        </label>
                    </div>
                    <div className={ fieldStyles } >
                        <label>
                            Address line 2 {' '}
                            <Input ref="address_line_2" placeholder=" " text={ address.address_line_2 } />
                        </label>
                    </div>
                    <div className={ fieldStyles } >
                        <label>
                            City {' '}
                            <Input ref="city" placeholder=" " text={ address.city } />
                        </label>
                    </div>
                    <div className={ style.field } >
                        <label>
                            Postcode {' '}
                            <Input ref="postcode" placeholder=" " text={ address.postcode } />
                        </label>
                    </div>
                </div>
                <div className={ style.button }>
                    <button className={ style.btn_element } onClick={ ::this.handleSubmit } >
                        ENTER ADDRESS
                    </button>
                </div>
                <Close dispatch={ this.props.dispatch } />
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
)(Address);