import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Message, Button } from 'semantic-ui-react';

import { signOut } from '../../actions/auth';

class SignOut extends Component {


  componentDidMount() {
    console.log("Did mount");
    this.props.signOut();
  }

  render() {
    console.log("render");
    return (
      <Container>
        <Message error header="We're sorry to see you go :("/>
        <Button as={Link} to='/' content='Go back to sign up'/>
      </Container>
    );
  }
}

export default connect(null, { signOut })(SignOut);
