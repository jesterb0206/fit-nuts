import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useMutation, useQuery} from '@apollo/client';
import {ADD_EXERCISE} from '../utils/mutations';
import {QUERY_WORKOUT} from '../utils/queries';
import CurrentWorkout from './CurrentWorkout';
import Auth from '../utils/auth';

const AddExercise = () => {
  const [userFormData, setUserFormData] = useState({
    dayOfTheWeek: '',
    exerciseName: '',
    weight: '',
    sets: '0',
    reps: '0',
    other: '',
  });

  const [addExercise] = useMutation(ADD_EXERCISE);
  
  const {loading, data, refetch} = useQuery(QUERY_WORKOUT, {
    variables: { dayOfTheWeek : userFormData.dayOfTheWeek },
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (userFormData.dayOfTheWeek === '') {
      setErrorMessage('Please select a valid day of the week :) ');

      return;
    }

    setErrorMessage('');

    // Checks to See if the User Inputted Everything Correctly (as per the React Bootstrap documentation)

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {

      const { data } = await addExercise({
        variables: {
          ...userFormData,
          reps: parseInt(userFormData.reps),
          sets: parseInt(userFormData.sets),
          weight: parseInt(userFormData.weight),
        },
      });

    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      dayOfTheWeek: userFormData.dayOfTheWeek,
      exerciseName: '',
      weight: '',
      sets: '0',
      reps: '0',
      other: '',
    });
    refetch();
  };

  return (
    <>
      <CurrentWorkout
        className='currentWorkout'
        dayOfTheWeek={userFormData.dayOfTheWeek}
        setUserFormData={setUserFormData}
        refetch = {refetch}
        loading = {loading}
        data = {data}
      />
      <Form className='addExerciseForm' onSubmit={handleFormSubmit}>

        <Form.Group controlId='formBasicSelect'>
          <Form.Label className='inputNameTitle'>Day of the Week</Form.Label>
          <Form.Control
            as='select'
            placeholder='Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday '
            name='dayOfTheWeek'
            value={userFormData.dayOfTheWeek}
            onChange={handleInputChange}
          >
            <option value=''></option>
            <option value='Sunday'>Sunday</option>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className='inputNameTitle' htmlFor='name'>
            Name - required
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Exercise Name'
            name='exerciseName'
            onChange={handleInputChange}
            value={userFormData.exerciseName}
            required
          />
          <Form.Control.Feedback type='invalid'>
            An exercise's name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='inputNameTitle' htmlFor='weight'>
            Weight
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Weight'
            name='weight'
            onChange={handleInputChange}
            value={userFormData.weight}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Weight is a required field!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='inputNameTitle' htmlFor='sets'>
            Sets
          </Form.Label>
          <Form.Control
            type='number'
            placeholder='Number of Sets'
            name='sets'
            onChange={handleInputChange}
            value={userFormData.sets}
          />
          <Form.Control.Feedback type='invalid'>
            A valid number of sets is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='inputNameTitle' htmlFor='reps'>
            Reps
          </Form.Label>
          <Form.Control
            type='number'
            placeholder='Number of Reps'
            name='reps'
            onChange={handleInputChange}
            value={userFormData.reps}
          />
          <Form.Control.Feedback type='invalid'>
            A valid number of reps is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='inputNameTitle' htmlFor='other'>
            Notes
          </Form.Label>
          <Form.Control
            type='string'
            placeholder='Notes'
            name='other'
            onChange={handleInputChange}
            value={userFormData.other}
          />
          <Form.Control.Feedback type='invalid'>
            Invalid response!
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.exerciseName && userFormData.weight)}
          type='primary'
        >
          Submit
        </Button>
      </Form>

      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
      
    </>
  );
};

export default AddExercise;
