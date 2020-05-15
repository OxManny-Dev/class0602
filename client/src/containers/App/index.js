import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Grid } from 'semantic-ui-react'

import Counter from './../Counter';
import AllTodosList from '../AllTodosList';

import Navbar from './../../components/Navbar';

class App extends Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Navbar/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/counter' component={Counter}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default App;
