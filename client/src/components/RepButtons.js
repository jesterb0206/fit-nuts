import React from 'react';
import { Button} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_REPS } from '../utils/mutations';



const RepButtons = ( { _id, reps, onButtonClick } ) => {

    const [updateReps] = useMutation(UPDATE_REPS, {
        onCompleted: onButtonClick
    });
   
    return (

        <div>
            <Button
                className='btn-block btn-danger'
                onClick={() => {
                    updateReps({ 
                        variables: { 
                            _id: _id,
                            reps: parseInt( reps + 1 ) ,
                        }
                    })
                }}
                >
                    Increase Rep
            </Button>
        
        
            <Button
                className='btn-block btn-danger'
                onClick={() => {
                    if ( (reps - 1) >= 0 ) {
                        updateReps(
                            { variables: { 
                                _id: _id,
                                reps: parseInt( reps -1 )  
                            }}
                        )
                    }
                }}
                >
                    Decrease Rep
            </Button>
        </div>



    )
}

export default RepButtons