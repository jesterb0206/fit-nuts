import React from 'react';
import DeleteButton from './DeleteButton';
import SetButtons from './SetButtons';
import RepButtons from './RepButtons';

const CurrentWorkout = ({data, loading, refetch}) => {
  function handleSetButtonClick() {
    refetch();
  }

  function handleRepButtonClick() {
    refetch();
  }

  function handleDeleteButtonClick() {
    refetch();
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      {data?.workout?.map((exercise) => {
        return (
          <div className='card example' key={exercise._id}>
            <table className='styled-table'>
              <thead>
                <tr>
                  <th>Workout</th>
                  <th>Weight</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{exercise.exerciseName}</td>
                  <td>Weight: {exercise.weight}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                </tr>
              </tbody>
            </table>
            <div id='centerButton'>
              <SetButtons
                _id={exercise._id}
                sets={exercise.sets}
                onButtonClick={handleSetButtonClick}
              />
              <RepButtons
                _id={exercise._id}
                reps={exercise.reps}
                onButtonClick={handleRepButtonClick}
              />
              <DeleteButton
                _id={exercise._id}
                onButtonClick={handleDeleteButtonClick}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CurrentWorkout;
