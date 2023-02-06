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

const CurrentWorkout = ({data, loading, refetch}) => {
  function handleSetButtonClick() {
    refetch();
  }

  function handleRepButtonClick() {
    refetch();
  }

  function handleDeleteButtonClick() {
    refetch();
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      {data?.workout?.map((exercise) => {
        return (
          <div className='example' id='cardModified'>
            <table className='styledTableModified'>
              <thead>
                <tr>
                  <th>Workout</th>
                  <th>Weight</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{exercise.exerciseName}</td>
                  <td>Weight: {exercise.weight}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                </tr>
              </tbody>
            </table>
            <div id='centerButtonTwo'>
              <SetButtons
                _id={exercise._id}
                sets={exercise.sets}
                onButtonClick={handleSetButtonClick}
              />
              <RepButtons
                _id={exercise._id}
                reps={exercise.reps}
                onButtonClick={handleRepButtonClick}
              />
              <DeleteButton
                _id={exercise._id}
                onButtonClick={handleDeleteButtonClick}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CurrentWorkout;
