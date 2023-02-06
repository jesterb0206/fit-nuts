/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

const Card = ({workouts}) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  const groupedWorkouts = workouts.reduce((acc, workout) => {
    if (!acc[workout.dayOfTheWeek]) {
      acc[workout.dayOfTheWeek] = [];
    }
    acc[workout.dayOfTheWeek].push(workout);
    return acc;
  }, {});

  // Returns Workout Summary Card Content

  return (
    <div id='testing'>
      {Object.entries(groupedWorkouts).map(([day, workoutsForDay]) => (
        <div className='card example' key={day}>
          <h1 id='center__text'>{day}</h1>
          {/* Workout Summary Table */}
          <table className='styled-table'>
            <thead>
              <tr>
                <th>Workout</th>
                <th>Weight</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Notes</th>
              </tr>
            </thead>
            {workoutsForDay.map((workout) => (
              <tbody>
                <tr key={workout.exerciseName}>
                  <td>{workout.exerciseName}</td>
                  <td>{workout.weight}</td>
                  <td>{workout.reps}</td>
                  <td>{workout.sets}</td>
                  <td>{workout.other}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export default Card;
