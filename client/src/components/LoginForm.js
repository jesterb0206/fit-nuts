/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import Auth from '../utils/auth';
import {LOGIN_USER} from '../utils/mutations';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserFormData({...userFormData, [name]: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Checks to See if the User Inputted Everything Correctly (as per the React Bootstrap documentation)

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const {data} = await login({
        variables: {...userFormData},
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  // Returns the Log In Form

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant='danger'
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <div id='centerButton'>
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='submit'
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
