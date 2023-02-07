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
        $_id: ID!,
        $sets: Int
    ) {
        updateSets( _id: $_id, sets: $sets) {
            sets
        }
    }`


export const UPDATE_REPS = gql`
    mutation updateReps(
        $_id: ID!,
        $reps: Int
    ) {
        updateReps( _id: $_id, reps: $reps) {
            reps
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
        _id
        weight
        sets
        reps
        other
      }
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
          _id
          dayOfTheWeek
          exerciseName
          weight
          sets
          reps
          other
        }
      }
`