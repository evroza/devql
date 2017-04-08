/**
 * Created by Evans R. on 4/7/2017.
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import css from './ContactForm.scss';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className={css.form_item}>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Name" component="input" type="text"/>
        </div>
        <div className={css.form_item}>
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="xyz@abc.com" component="input" type="email"/>
        </div>
        <div className={css.form_item}>
          <label htmlFor="message">Message</label>
          <Field name="message" component="textarea" placeholder="Hello to you too!"/>
        </div>
        <div className={css.form_item}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: React.PropTypes.func
};

// Decorate the form component and export
export default reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

