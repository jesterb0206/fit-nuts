// /* This is the page where the user will be able to create a workout, by adding into a user form  */


// /* Parts of the workout page 

// -current date
// -display for the workouts added in
// --display for name of workout, weight, sets, reps, plus button, minus button
// -plus minus button to take away workouts
// -input form to handle workout and weight
// -save button

// bonus
// -able to select, highlight to delete the workout
// -able to select and move around


// */


import React from 'react';
import Exercise from '../components/Exercise';
import AddExercise from '../components/AddExercise';
import CurrentWorkout from '../components/CurrentWorkout'


const Workout = () => {



    return (
    <>    
        <main className='workoutSection'>
        <div>

            <h1 className='workoutHeader'> Create Your Workout Session</h1>

           < Exercise className="exerciseComp"/>
           < CurrentWorkout />
           < AddExercise /> 
        </div>
        </main>

    </>    
    )
}


export default Workout;