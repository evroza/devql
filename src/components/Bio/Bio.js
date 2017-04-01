/**
 * Created by Evans R. on 4/2/2017.
 */
import React, { Component } from 'react';


export default class Bio extends Component {

  render() {
    const styles = require('./Bio.scss');
    return (
      <div className={styles.bio}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, eligendi enim facilis modi obcaecati officia quas quia quibusdam? Ab asperiores deserunt, distinctio necessitatibus quam quos recusandae rerum! Maxime, unde.</p>
      </div>
    );
  }
}

