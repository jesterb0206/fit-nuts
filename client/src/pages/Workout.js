import React from 'react';
import AddExercise from '../components/AddExercise';

// Returns the Create Your Workout Session Page

const Workout = () => {
  return (
    <>
      <main className='workoutSection'>
        <div>
          <h1 className='workoutHeader'> Create Your Workout Session</h1>
          <AddExercise />
        </div>
      </main>
    </>
  );
};

export default Workout;
