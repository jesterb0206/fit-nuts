import React from 'react';
import Exercise from '../components/Exercise';
import AddExercise from '../components/AddExercise';
import CurrentWorkout from '../components/CurrentWorkout';

// Returns the Create Your Workout Session Page

const Workout = () => {
  return (
    <>
      <main className='workoutSection'>
        <div>
          <h1 className='workoutHeader'> Create Your Workout Session</h1>
          <Exercise className='exerciseComp' />
          <CurrentWorkout />
          <AddExercise />
        </div>
      </main>
    </>
  );
};

export default Workout;
