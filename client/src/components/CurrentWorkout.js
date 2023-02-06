/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Jumbotron, Container, CardColumns, Card, Button} from 'react-bootstrap';

import {QUERY_ME} from '../utils/queries';
import {QUERY_WORKOUT} from '../utils/queries';
import {useMutation, useQuery} from '@apollo/client';
import Auth from '../utils/auth';
import DeleteButton from './DeleteButton';
import SetButtons from './SetButtons';
import RepButtons from './RepButtons';

const CurrentWorkout = ({dayOfTheWeek}) => {

  const {loading, data, refetch} = useQuery(QUERY_WORKOUT, {
    variables: { dayOfTheWeek },
  });
  

  function handleSetButtonClick() {
    refetch();
  }

  function handleRepButtonClick() {
    refetch();
  }

  function handleDeleteButtonClick() {
    refetch();
  }

  const userData = data?.me || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Container>
        <CardColumns>
          {data?.workout?.map((exercise) => {
            return (
              <Card key={exercise._id} border='dark'>
                <Card.Body>
                  <Card.Title>{exercise.exerciseName}</Card.Title>
                  <p className='small'>Weight: {exercise.weight}</p>
                  <Card.Text>{exercise.sets}</Card.Text>
                  <Card.Text>{exercise.reps}</Card.Text>
                  <Card.Text>{exercise.other}</Card.Text>
                  < SetButtons _id = { exercise._id } sets = { exercise.sets } onButtonClick={ handleSetButtonClick }/>
                  < RepButtons _id =  {exercise._id} reps = {exercise.reps}  onButtonClick={ handleRepButtonClick } />
                  <DeleteButton _id= { exercise._id } onButtonClick = { handleDeleteButtonClick }/>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default CurrentWorkout;
