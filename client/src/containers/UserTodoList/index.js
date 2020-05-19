import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUserTodos } from '../../actions/allTodos';


class UserTodoList extends Component {

  componentDidMount() {
    this.props.getUserTodos();
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
    return (
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to the todo app'/>
        <Form size='large'>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
              language='portuguese'
            />
          </Segment>
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
