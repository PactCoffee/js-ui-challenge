import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-simple-router';

import * as UserActions from '../../../actions/user';
import Icon from '../../../components/Icon';
import Close from '../../../components/Close';
import style from './style.css';


class Brew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafetiere: false,
            aeropress: false,
            drip: false,
            stovetop: false,
            espresso: false
        };
    }
    componentWillReceiveProps(nextProps) {
        let user = nextProps.user;
        if(user[0] === '{') {
            user = JSON.parse(user);
        }
        const brew = user.brew_type;
        const stateCopy = this.state;
        if(brew) {
            stateCopy[brew] = true;
            this.setState(stateCopy);
        }
    }
    handleIconClick(icon) {
        const stateCopy = this.state;
        return () => { 
            for (let key in stateCopy) {
                if (key === icon) {
                    stateCopy[ icon ] = true;        
                } else {
                    stateCopy[ key ] = false;
                }
            }
            this.setState(stateCopy); 
        };
    }
    handleSubmit() {
        const keys = Object.keys(this.state);
        const brew = keys.find(b => { return this.state[b]; });
        if (brew) {
            const setUserData = UserActions.setUserData({ brew_type: brew });
            setUserData(this.props.dispatch);
        }
        this.props.dispatch(push('/funnel/address'));
    }
	render() {
        const name = this.props.user.name || '';
        const coma = name.lenght ? ',' : '';
		return (
            <div>
                <div className={ style.greeting } >HI THERE { coma + name.toUpperCase() + "! LET'S FIND YOU SOME PERFECT COFFEE."} </div>
                <h2 className={ style.title } >Firstly, how do you brew your coffee?</h2>
                <div className={ style.container } >
                    <div className={ style.icon } onClick={ ::this.handleIconClick('cafetiere') } >
                        <Icon name="cafetiere" clicked={ this.state.cafetiere } />
                        <span className={ style.coffee } >Cafetiere</span>
                        <br/>
                        <span className={ style.type } >COARSE</span>
                    </div>
                    <div className={ style.icon } onClick={ ::this.handleIconClick('aeropress') } >
                        <Icon name="aeropress" clicked={ this.state.aeropress } />
                        <span className={ style.coffee } >AeroPress</span>
                        <br/>
                        <span className={ style.type } >MEDIUM FINE</span>
                    </div>
                    <div className={ style.icon } onClick={ ::this.handleIconClick('drip') } >
                        <Icon name="dripper" clicked={ this.state.drip } />
                        <span className={ style.coffee } >Drip</span>
                        <br/>
                        <span className={ style.type } >MEDIUM</span>
                    </div>
                    <div className={ style.icon } onClick={ ::this.handleIconClick('stovetop') } >
                        <Icon name="stovetop" clicked={ this.state.stovetop } />
                        <span className={ style.coffee } >Stovetop</span>
                        <br/>
                        <span className={ style.type } >MEDIUM COARSE</span>
                    </div>
                    <div className={ style.icon } onClick={ ::this.handleIconClick('espresso') } >
                        <Icon name="espresso" clicked={ this.state.espresso } />
                        <span className={ style.coffee } >Espresso</span>
                        <br/>
                        <span className={ style.type } >SAND</span>
                    </div>
                </div>
                <div className={ style.button }>
                    <button className={ style.btn_element } onClick={ ::this.handleSubmit } >
                        CHOOSE A BREW
                    </button>
                </div>
                <Close dispatch={ this.props.dispatch } />
            </div>
		);
	}
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(
    mapStateToProps
)(Brew);