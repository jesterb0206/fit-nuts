/* eslint-disable react/jsx-no-undef */

import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUT} from '../utils/queries';
import Card from '.././components/Card';
// import '../App.css';

function WorkoutSummary() {
  const {loading, data} = useQuery(QUERY_WORKOUT);
  const workouts = data?.workout || [];
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

export default WorkoutSummary;
