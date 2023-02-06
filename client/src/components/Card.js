import React from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import {useQuery} from '@apollo/client';
import {QUERY_WORKOUT} from '../utils/queries'



const Card = ({dayOfTheWeek}) => {
  
  const {loading, data} = useQuery( QUERY_WORKOUT, {
    variables: {dayOfTheWeek},
  });
  const workouts = data?.workout || [];

  return (
    <div>
      {Object.entries(groupedWorkouts).map(([day, workoutsForDay]) => (
        <div className='card' key={day}>
          <h1 id='center__text'>{day}</h1>
          <table>
            <tr>
              <th>Workout</th>
              <th>Weight</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Notes</th>
            </tr>
            {workoutsForDay.map((workout) => (
              <tr key={workout.exerciseName}>
                <td>{workout.exerciseName}</td>
                <td>{workout.weight}</td>
                <td>{workout.reps}</td>
                <td>{workout.sets}</td>
                <td>{workout.other}</td>
              </tr>
            ))}
          </table>
        </div>
      ))}
      {/* <button>Add/Change Workout</button> */}
    </div>
  );
};

export default Card;