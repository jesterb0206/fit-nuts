/* This page will be where the workouts will be displayed as cards as a list view. 


Each card will display a date and the workouts, and the records for the workouts

-likes, comments
-date
-card
--list of workouts
--number of reps and sets done
*/
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT } from '../utils/mutations'

export default function WorkoutSummary() {
    const { loading, data } = useQuery(QUERY_WORKOUT);
    const workouts = data?.workout || [];


    return (
        <div>

        </div>
    )
}
