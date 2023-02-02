import React from 'react';
import '../App.css';

function Card() {
  return (
    <div className='card'>
      <h1>Monday</h1>
      <table>
        <tr>
          <th>Workout</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
        <tr>
          <td>Barbell back squat</td>
          <td>141 lb</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Dumbbell Lateral Raise</td>
          <td>34 lb</td>
          <td>2</td>
          <td>8</td>
        </tr>
      </table>
      <button>Add/Change Workout</button>
    </div>
  );
}

export default Card;
