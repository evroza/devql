import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { Bio } from '../../components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const profImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.home}>
          <div className="container">
            <h1>I'm Evans</h1>
            <p>
              <i>Software Engineer</i>
            </p>


            <Bio />
            <img src={profImage} alt="A picture of me"/>

          </div>
        </div>
      </div>
    );
  }
}
