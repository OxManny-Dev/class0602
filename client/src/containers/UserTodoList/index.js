import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import axios from 'axios';

import { getUserTodos } from '../../actions/allTodos';
import { ADD_USER_TODO, ADD_USER_TODO_ERROR } from '../../actions/types';


import UserTodoListItems from './UserTodoListItems';

class UserTodoList extends Component {

  componentDidMount() {
    this.props.getUserTodos();
  }

  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post('/api/user/todos', formValues, { headers: { 'authorization': localStorage.getItem('token')}});
      dispatch({ type: ADD_USER_TODO });
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_USER_TODO_ERROR, payload: 'You must provide text' });
    }
  }

  renderAddTodo = ({ input, meta, language })=> {
    return (
      <Form.Input
        {...input}
        error={ meta.touched && meta.error }
        autoComplete='off'
        placeholder={ language === 'portuguese' ? 'adicione uma tarefa' : 'Add a todo' }
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.userTodos);
    return (
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to the todo app'/>
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
              language='portuguese'
            />
            <Button
              type='submit'
              fluid
              color='teal'
              content='Add a todo'/>
          </Segment>
          <List animated divided selection>
            <UserTodoListItems todos={this.props.userTodos}/>
          </List>
        </Form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userTodos: state.todos.userTodos,
    todoClientError: state.todos.getUserTodosClientError,
    todoServerError: state.todos.getUserTodosServerError
  };
};


// export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));
// export default connect(mapStateToProps, { getUserTodos })(reduxForm({ form: 'addTodo' })(UserTodoList))

// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// export default reduxForm({ form: 'addTodo' })(composedComponent);

export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos })
)(UserTodoList);
