import React from 'react';
import {Button} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import {DELETE_WORKOUT} from '../utils/mutations';

const DeleteButton = ({_id, onButtonClick}) => {
  const [deleteWorkout] = useMutation(DELETE_WORKOUT, {
    onCompleted: onButtonClick,
  });

  return (
    <div>
      <Button
        className='btn-primary'
        onClick={() => {
          deleteWorkout({
            variables: {
              _id: _id,
            },
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
