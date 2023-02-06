/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import Auth from '../utils/auth';
import {ADD_USER} from '../utils/mutations';

const SignupForm = () => {
  // Set Initial Form State

  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Set State for Form Validation

  const [validated] = useState(false);

  // Set State for Alert

  const [showAlert, setShowAlert] = useState(false);

  const [addUser, {error}] = useMutation(ADD_USER);

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
      const {data} = await addUser({
        variables: {...userFormData},
      });

      Auth.login(data.addUser.token);
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

  // Returns the Sign Up Form

  return (
    <>
      {/* This Is Needed for the Validation Functionality Above */}

      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* Show Alert if Server Response Is Bad */}

        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant='danger'
        >
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
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
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
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

export default SignupForm;
