import React from 'react';
import Card from '.././components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';

const WorkoutSummary = () => {
  const { data } = useQuery(QUERY_WORKOUTS);
  const workouts = data?.workouts || [];

  console.log(workouts, "this log is on WorkoutSummary.js")

  return (
    <div className='workout__summary'>
      <h1 id='center__text'>Workout Summary</h1>
      <div className='workout__cards'>
        <Card
          workouts={workouts}
        />
      </div>
    </div>
  );
}

export default WorkoutSummary;
