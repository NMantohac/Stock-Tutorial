import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { Container, Form, Button } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick(event) {
    event.preventDefault();
    //validate input form fields
    const emailCheck = this.isEmail(this.state.email)
    const passwordCheck = this.isPassword(this.state.password)
    const usernameCheck = this.isRequired(this.state.username)
    if (emailCheck && passwordCheck && usernameCheck) {
      const { data } = await axios.post('/api/users/signup', { username: this.state.username, password: this.state.password, email: this.state.email });
      //validate data from post request
      console.log (data.newUser[0]);
      localStorage.setItem("currentStockBroker", JSON.stringify(data.newUser[0]))
      this.props.history.push({
        pathname: '/dashboard',
        state: { newUser: data.newUser[0] }

      })
    } else {
      console.log('Please enter valid informations')
    }
  };

  isEmail(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? false : true
  };
  isPassword(value) {
    return value && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ? false : true
  }
  isRequired(value) {
    return value && value !== '' ? true : false
  };
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Container>
        <h1 className="signup-title">Create your own account!</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name='username'
              type="text"
              placeholder="Create your username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted">
              Password length does not matter.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => this.handleClick(event)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
