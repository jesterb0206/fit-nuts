import React from 'react';
import {Button} from 'react-bootstrap';
import {useMutation} from '@apollo/client';
import {UPDATE_SET} from '../utils/mutations';

const SetButtons = ({_id, sets, onButtonClick}) => {
  const [updateSets] = useMutation(UPDATE_SET, {
    onCompleted: onButtonClick,
  });

  return (
    <div>
      <Button
        className='btn-primary'
        onClick={() => {
          updateSets({
            variables: {
              _id: _id,
              sets: parseInt(sets + 1),
            },
          });
        }}
      >
        Increase Set
      </Button>
      <Button
        className='btn-primary'
        onClick={() => {
          if (sets - 1 >= 0) {
            updateSets({
              variables: {
                _id: _id,
                sets: parseInt(sets - 1),
              },
            });
          }
        }}
      >
        Decrease Set
      </Button>
    </div>
  );
};

export default SetButtons;
