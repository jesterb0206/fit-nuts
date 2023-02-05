import React from 'react';
import { Button} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { DELETE_WORKOUT } from '../utils/mutations'





const DeleteButton = ({_id}) => {

  const [deleteWorkout] = useMutation(DELETE_WORKOUT)

    return (
        <div>
          <Button
            className='btn-block btn-danger'
            onClick={() => {
              deleteWorkout({
                variables: {
                  _id: _id
                }
              })
            }}
          >
            Delete
          </Button>
        </div>
    )
}

export default DeleteButton