import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../utils/mutations';

const AddExercise = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
     const [addExercise, { error, data} ] = useMutation(ADD_EXERCISE);

    const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    try {

        const { data } = await addExercise({
            variables: { ...userFormData },
          });
    
    
        } catch (err) {
          console.error(err);
    }

    setUserFormData({
        username: '',
        email: '',
        password: '',
        });
    };


    return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='name'>name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Exercise Name'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='weight'>weight</Form.Label>
          <Form.Control
            type='text'
            placeholder='Working Weight'
            name='weight'
            onChange={handleInputChange}
            value={userFormData.weight}
            required
          />
          <Form.Control.Feedback type='invalid'>Working Weight is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='sets'>sets</Form.Label>
          <Form.Control
            type='number'
            placeholder='number of sets'
            name='sets'
            onChange={handleInputChange}
            value={userFormData.sets}
            required
          />
          <Form.Control.Feedback type='invalid'>Valid set is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='reps'>reps</Form.Label>
          <Form.Control
            type='number'
            placeholder='number of reps'
            name='reps'
            onChange={handleInputChange}
            value={userFormData.reps}
            required
          />
          <Form.Control.Feedback type='invalid'>Valid set is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='other'>other</Form.Label>
          <Form.Control
            type='string'
            placeholder='other'
            name='other'
            onChange={handleInputChange}
            value={userFormData.other}
            required
          />
          <Form.Control.Feedback type='invalid'>Valid set is required!</Form.Control.Feedback>
        </Form.Group>


        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

        
    </>

    )
}

export default AddExercise;
