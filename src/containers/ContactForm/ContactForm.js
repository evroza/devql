/**
 * Created by Evans R. on 4/7/2017.
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Field name="message" component="textarea" placeholder="Hello to you too!"/>
        </div>
        <button type="submit">Submit</button>
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

