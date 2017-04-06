import React, { Component } from 'react';
import Helmet from 'react-helmet';

import css from './Home.scss';


export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const profImage = require('./logo.png');
    const tinker1 = "{'Tinkered before': [('Node', 'React', 'Angular'), ('Python', 'Flask', 'Django'), ('Asp.Net', 'Asp.Net Core'), ('Php', 'Zend', 'CodeIgniter')]}";
    const tinker2 = "{'Currently tinkering': ['Software Defined Networking', 'OpenFlow', 'Hadoop', 'Java']}";
    return (
      <div className={css.home}>
        <Helmet title="Home"/>
        <div className={css.container}>
          <div id={css.bio}>
            <div id={css.bio_intro}>
              <div className={css.bio_row}>
                <div className={css.bio_3_5}>
                  <p>
                    <span className={css.block}>A FullStack Developer, </span>
                    <span className={css.block}>Habitual tinkerer</span>
                    <span className={css.block}><code>{ tinker1 }</code></span>
                    <span className={css.block}><code>{ tinker2 }</code> </span>
                  </p>
                  <h2>If something is worth building, it's worth building right..</h2>
                </div>
                <div className={css.bio_2_5}>
                  <img src={require('./me.jpg')} alt="An picture of me" />
                </div>
              </div>
            </div>
            <div id="bio-description">
              <blockquote>
                <p>Hi! I'm Evans Rutoh a China-based Software Developer from Kenya. I'm passionate about web and mobile technologies, electronic music and travels.</p>
                <p>I can write solid and well-organized code from scratch, and I have a passion for exploring new and emerging web technologies. I ensure that my projects are optimised and responsive</p>
                <p>If you wanna talk about the web, a new cool project or invite me to play soccer, send me an e-mail.</p>
              </blockquote>
            </div>
            <hr className={css.divider} />

          </div>

        </div>

      </div>
    );
  }
}
