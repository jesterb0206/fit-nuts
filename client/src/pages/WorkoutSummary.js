import React from 'react';
import Card from '.././components/Card';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUTS} from '../utils/queries';

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
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
        dayOfTheWeek="Wednesday"
        />
        <Card
        dayOfTheWeek="Thursday"
        />
        <Card
        dayOfTheWeek="Friday"
        />
        <Card 
        dayOfTheWeek="Saturday"
        />
        <Card 
        dayOfTheWeek="Sunday"
        />
      </div>
    </div>
  );
}

export default WorkoutSummary;
