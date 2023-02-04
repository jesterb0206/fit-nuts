import React from 'react';
import '../App.css';
// import { useQuery } from '@apollo/client';
// import { QUERY_WORKOUT } from '../utils/queries'



const Card = ({ workouts }) => {

  // const { loading, data } = useQuery(QUERY_WORKOUT, {
  //   variables: { dayOfTheWeek },
  // });
  // const workouts = data?.workout || [];
  console.log(workouts, "on card.js")
  console.log("before if statement")

  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }


  return (
    <div className='card'>
      {workouts.map((workouts))}
      <h1 id='center__text' key={workouts.dayOfTheWeek}></h1>
      <table>
        <tr>
          <th>Workout</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>something</td>
          <td>141 lb</td>
          <td>5</td>
          <td>5</td>
        </tr>
      </table>
      {/* <button>Add/Change Workout</button> */}
    </div>
  );
}

export default Card;
