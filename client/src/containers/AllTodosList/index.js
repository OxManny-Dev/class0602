import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getAllTodos } from '../../actions/allTodos';

class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }


  renderTodoList = () => {
    if (this.props.todos.length === 0) {
      return <Header content='No todos yet'/>
    } else {
      return this.props.todos.map( ({ _id, text, dateCreated }) => {
        return (
          <List.Item key={_id}>
            <List.Content>
              <List.Header>{text}</List.Header>
              <List.Description>Created: {moment(dateCreated).fromNow()}</List.Description>
            </List.Content>
          </List.Item>
        )
      })
    }
  }

  render() {
    return (
      <List>
        { this.renderTodoList() }
      </List>
    );
  }
}


function mapStateToProps({ todos: { todos, getAllTodosError }}) {
  return { todos, getAllTodosError };
}



export default connect(mapStateToProps, { getAllTodos })(AllTodosList);

