import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';

import DeleteTodoModal from './../../../components/DeleteTodoModal';

export default (props) => {
  if (props.todos.length === 0) {
    return <Header content='No todos yet'/>;
  } else {
    return props.todos.map(({_id, text, completed }) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left' >
            <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'}}>{text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Popup
              on='click'
              position='top right'
              trigger={
                <Button
                  color='blue'
                  content='Mark Complete'
                  size='small'
                />
              }
              content={
                <Button
                  color='green'
                  content='Are you sure this is done?'
                  onClick={ (event) => props.handleUpdate(_id, completed, text)}
                />
              }
            />
            <DeleteTodoModal
              handleDelete={props.handleDelete}
              text={text}
              id={_id}
            />
          </List.Content>
        </List.Item>
      );
    });
  }
}
