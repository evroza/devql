import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from '../../redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from '../../redux/modules/auth';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import { Link } from 'react-router';

import { SocialLinks } from '../../components';

import css from './App.scss';


@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }


  render() {
    // const {user} = this.props;
    // const styles = require('./App.scss');

    return (
      <div >
        <Helmet {...config.app.head}/>

        <div id="header">
          <div id="nav">
            <ul>
              <li><Link to="/Contact" onlyActiveOnIndex>Contact</Link></li>
              <li><a href="mailto:rutohevans@gmail.com" target="_blank">Email</a></li>
            </ul>
          </div>
          <div id={css.nav_strap}>
            <h1>DevQL</h1>
          </div>
        </div>
        <SocialLinks />

        <div >
          {this.props.children}
        </div>


      </div>
    );
  }
}
