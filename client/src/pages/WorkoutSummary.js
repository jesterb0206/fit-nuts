/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React from 'react';
// import {useQuery} from '@apollo/client';
// import {QUERY_WORKOUT} from '../utils/queries';
import Card from '.././components/Card';
// import '../App.css';

function WorkoutSummary() {
 
  return (
    <div ClassName='workout__summary'>
      <h1 id='center__text'>Workout Summary</h1>
      <div className='workout__cards'>
        <Card
        dayOfTheWeek="Monday"
        />
        <Card 
        dayOfTheWeek="Tuesday"
        />
        <Card
        dayOfTheWeek="Wensday"
        />
        <Card
        dayOfTheWeek="Thursday"
        />
        <Card
        dayOfTheWeek="Friday"
        />
        <Card 
        dayOfTheWeek="Saterday"
        />
        <Card 
        dayOfTheWeek="Sunday"
        />
      </div>
    </div>
  );
}

export default WorkoutSummary;
