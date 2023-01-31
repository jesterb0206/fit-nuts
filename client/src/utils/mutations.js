import { gql } from '@apollo/client';


export const ADD_EXERCISE = gql `
    mutation addExercise(
        $exerciseName: String!,
        $weight: Number!,
        $sets: Number,
        $reps: Number 
        ) {
            addExercise(
                exerciseName: $exerciseName,
                weight: $weight,
                sets: $sets,
                reps: $reps
                )
        {
            exerciseName
            weight
            sets
            reps
        }
}
`






