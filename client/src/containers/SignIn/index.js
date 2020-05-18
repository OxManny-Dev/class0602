import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';

class SignIn extends Component {

  // When the user submits the form, send the formValues to /api/auth/signin
  // set the token coming from data into localStorage under the key 'token'
  // Dispatch the action to the reducer to set the token as the state for authentication
  // Redirect the user to the '/counter' route

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={ meta.touched && meta.error }
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email address'
      />
    )
  }
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        type='password'
        fluid
        error={ meta.touched && meta.error }
        icon='lock'
        iconPosition='left'
        autoComplete='off'
        placeholder='password'
      />
    )
  }

  render() {
    const { invalid, submitting, submitFailed } = this.props;
    return (
      <Form size='large'>
        <Segment stacked>
          <Field
             name='email'
             component={this.renderEmail}
             validate={
               [
                 required({ msg: 'Email is required' }),
                 email({ msg: 'You must provide a valid email address' })
               ]
             }
          />
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a password' })
              ]
            }
          />
          <Button
            content='Sign In'
            color='teal'
            fluid
            size='large'
            type='submit'
            disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
    )
  }
}


export default reduxForm({ form: 'SignIn '})(SignIn);
