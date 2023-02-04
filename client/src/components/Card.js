/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUT} from '../utils/queries';

const Card = ({dayOfTheWeek}) => {
  const {loading, data} = useQuery(QUERY_WORKOUT, {
    variables: {dayOfTheWeek},
  });

  const workouts = data?.workout || [];

  return (
    <div className='card'>
      <h1 id='center__text'>{dayOfTheWeek}</h1>
      <table class='styled-table'>
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
            <td>Barbell back squat</td>
            <td>141 lb</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Dumbbell Lateral Raise</td>
            <td>34 lb</td>
            <td>2</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
      {/* How do we useState to change the workout button's background-color on hover */}
      <div id='centerButton'>
        <button id='workoutButton'>Submit</button>
      </div>
    </div>
  );
};

export default Card;
