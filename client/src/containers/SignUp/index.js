import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class SignUp extends Component {
  onSubmit = async (formValues, dispatch) => {
    console.log("test");
    try {
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/counter');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

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
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
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
          <Field
            name='password'
            validate={
              [
                required({ msg: 'You must provide a password' }),
                length({ minimum: 6, msg: 'Your password must be at least 6 characters long' })
              ]
            }
            component={this.renderPassword}
          />
          <Button
            content='Sign Up'
            color='teal'
            fluid
            size='large'
            type='submit'
            disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
    );
  }
};

const asyncValidate = async ({ email }) => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email is already taken' };
  }
};

export default reduxForm({
  form: 'SignUp',
  asyncValidate,
  asyncChangeFields: ['email']
})(SignUp);
