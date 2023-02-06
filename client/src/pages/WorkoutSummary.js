import Card from '.././components/Card';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUTS} from '../utils/queries';
import React, {useEffect} from 'react';

const WorkoutSummary = () => {
  const {data, refetch} = useQuery(QUERY_WORKOUTS);
  const workouts = data?.workouts || [];

  useEffect(() => {
    refetch();
  }, []);

  console.log(workouts, 'this log is on WorkoutSummary.js');

  return (
    <div className='workout__summary'>
      <h1 className='workoutHeader' id='center__text2'>
        Workout Summary
      </h1>
      <div className='workout__cards'>
        <Card workouts={workouts} />
      </div>
    </div>
  );
};

export default WorkoutSummary;
