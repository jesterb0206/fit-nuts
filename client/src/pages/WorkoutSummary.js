import React from 'react';
import Card from '.././components/Card';

// Function That Returns the Workout Summary Heading & Cards

function WorkoutSummary() {
  return (
    <div ClassName='workout__summary'>
      <h1 id='center__text'>Workout Summary</h1>
      <div className='workout__cards'>
        <Card dayOfTheWeek='Monday' />
        <Card dayOfTheWeek='Tuesday' />
        <Card dayOfTheWeek='Wednesday' />
        <Card dayOfTheWeek='Thursday' />
        <Card dayOfTheWeek='Friday' />
        <Card dayOfTheWeek='Saturday' />
        <Card dayOfTheWeek='Sunday' />
      </div>
    </div>
  );
}

export default WorkoutSummary;
