/* eslint-disable react/jsx-no-undef */

import React from 'react';
import Card from '.././components/Card';
import '../App.css';

function WorkoutSummary() {
  return (
    <div ClassName='workout__summary'>
      <h1 id='center__text'>Workout Summary</h1>
      <div className='workout__cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}


-likes, comments
-date
-card
--list of workouts
--number of reps and sets done
*/
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT } from '../utils/mutations'

export default function WorkoutSummary() {
    const { loading, data } = useQuery(QUERY_WORKOUT);
    const workouts = data?.workout || [];


    return (
        <div>

        </div>
    )
}

