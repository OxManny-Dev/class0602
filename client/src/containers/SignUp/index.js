import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';


class SignUp extends Component {
  renderEmail = formProps => {
    console.log(formProps);
    return (
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email address'
      />
    )
  }

  render() {
    return (
      <Form size='large'>
        <Segment stacked>
          <Field
            name='email'
            validate={
              [
                required({ msg: 'Email is required' }),
                email({ msg: 'You must provide a valid email address' })
              ]
            }
            component={this.renderEmail}
          />
        </Segment>
      </Form>
    );
  }
};


export default reduxForm({ form: 'SignUp' })(SignUp);
