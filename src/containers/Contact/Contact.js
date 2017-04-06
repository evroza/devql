/**
 * Created by Evans R. on 4/6/2017.
 *
 * The Contact Page/Route
 */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import ContactForm from '../ContactForm/ContactForm';

import css from './Contact.scss';

export default class Contact extends Component {
  constructor() {
    // must call parent constructor
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }

  componentDidMount() {
    if (socket) {
      // check if contact form just submitted
      socket.on('contact', this.onMessageReceived);
      // TODO: save the message in state
      // TODO: Alert user message sent
    }
  }

  onMessageReceived = (data) => {
    const messages = this.state.messages;
    messages.push(data);
    // Store submitted message
    this.setState({messages});
  }

  handleSubmit(values) {
    console.log(values);
    if (socket) {
      socket.emit('contact', { ...values });
    }
  }

  render() {
    return (
      <div className={css.contact}>
        <Helmet title="Contact"/>
        <div className={css.container}>
          <Link to="/" onlyActiveOnIndex> Back </Link>

          <ContactForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }

}
