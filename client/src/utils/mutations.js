import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
    mutation addExercise(
        $dayOfTheWeek: String,
        $exerciseName: String!,
        $weight: Int!,
        $sets: Int,
        $reps: Int,
        $other: String
        ) {
            addExercise(
                dayOfTheWeek: $dayOfTheWeek,
                exerciseName: $exerciseName,
                weight: $weight,
                sets: $sets,
                reps: $reps,
                other: $other
                )
        {
            dayOfTheWeek
            exerciseName
            weight
            sets
            reps
            other
          }
}
`

export const UPDATE_SET = gql`
    mutation updateSets(
        $sets: Int
    ) {
        updateSets( sets: $sets) {
            set
        }
    }`


export const UPDATE_REPS = gql`
    mutation updateReps(
        $reps: Int
    ) {
        updateReps( reps: $reps) {
            set
        }
    }
`


export const SUMMARY_PAGE = gql`
  mutation  summaryPage($summary: summaryPage!) {
    summaryPage(summary: $summary) {
      username
      workout{
        dayOfTheWeek
        exerciseName
        workoutId
        weight
        sets
        reps
        other
      }
    }
  }  
`

export const UPDATE_WORKOUT = gql`
  mutation updateWorkout(
    $dayOfTheWeek: String,
        $exerciseName: String!,
        $weight: Int!,
        $sets: Int,
        $reps: Int,
        $other: String
    )  {
      updateWorkout(
        dayOfTheWeek: $dayOfTheWeek,
        exerciseName: $exerciseName,
        weight: $weight,
        sets: $sets,
        reps: $reps,
        other: $other
        )
        {
          dayOfTheWeek
          exerciseName
          weight
          sets
          reps
          other
        }
      }
`

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout(
        $_id: ID!
    )  {
      deleteWorkout(
        _id: $_id,
        )
        {
          user {
            _id
            username
          }
        }
      }
`