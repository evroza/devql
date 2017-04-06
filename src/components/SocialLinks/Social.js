/**
 * Created by Evans R. on 4/6/2017.
 */
import React, { Component } from 'react';

import css from './Social.scss';


export default class SocialLinks extends Component {

  render() {
    return (
      <div className={css.social}>
        <ul>
          <li className={css.social_github}><a href="https://github.com/evroza" target="_blank"></a></li>
          <li className={css.social_gplus}><a href="https://plus.google.com/u/0/113620386452109706891" target="_blank"></a></li>
          <li className={css.social_linkedin}><a href="https://www.linkedin.com/in/evans-rutoh-6996aa3a/" target="_blank"></a></li>
          <li className={css.social_twitter}><a href="https://twitter.com/naitwaevans" target="_blank"></a></li>
        </ul>
      </div>
    );
  }
}
