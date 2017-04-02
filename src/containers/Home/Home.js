import React, { Component } from 'react';
import Helmet from 'react-helmet';

import css from './Home.scss';


export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const profImage = require('./logo.png');
    return (
      <div className={css.home}>
        <Helmet title="Home"/>
        <div className={css.container}>
          <div id={css.bio}>
            <div id={css.bio_intro}>
              <div className={css.bio_row}>
                <div className={css.bio_3_5}>
                  <p>
                    <span className={css.block}>Lorem ipsum dolor sit amet, </span>
                    <span className={css.block}>Distinctio necessitatibus quam</span>
                    <span className={css.block}>Ab asperiores des </span>
                    <span className={css.block}>Enim facilis modi obcaecati </span>
                  </p>
                  <h2>Building for the web.</h2>
                </div>
                <div className={css.bio_2_5}>
                  <img src={require('./logo.png')} alt="An picture of me" />
                </div>
              </div>
            </div>
            <div id="bio-description">
              <blockquote>
                <p>Whether you need a startup dev team, or a simple website, we make it happen.</p>
                <p>Our way of breaking it down into iterative steps makes the process of creating your product easy to comprehend and control.</p>
              </blockquote>
            </div>
            <hr className={css.divider} />

          </div>

        </div>

      </div>
    );
  }
}
