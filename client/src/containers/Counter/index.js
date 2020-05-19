import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/counterActions';

import requireAuth from './../../hoc/requireAuth';

class Counter extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign='center'>
          <Header
            as='h1'
            textAlign='center'
            content='Welcome to the Counter App'
          />
          <Header as='h2' textAlign='center'>Counter: <span>{this.props.counter}</span></Header>
          <Button.Group>
            <Button
              icon='minus circle'
              content='Decrement'
              negative
              onClick={this.props.decrement}
            />
            <Button.Or/>
            <Button
              icon='plus circle'
              content='Increment'
              positive
              labelPosition='right'
              onClick={this.props.increment}
            />
          </Button.Group>
        </Grid.Column>
      </Grid>
    );
  }
}



// connect takes 2 parameters.
// The 1st one is a function that we should call mapStateToProps
// The 2nd one, is mapDispatchToProps. This is going to be an object
// That object is what action creators we want connected to this component
function mapStateToProps(state) {
  return { counter: state.counter };
};

// connect is a higher order component

//What this will do
// Is now inside of the counter component
//I will have access to
// this.props.counter
// this.props.increment
export default requireAuth(connect(mapStateToProps, { increment, decrement })(Counter));

