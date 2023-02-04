import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      workout {
        _id
        dayOfTheWeek
        exerciseName
        weight
        sets
        reps
        other
      }
    }
  }
`

export const QUERY_WORKOUT = gql`
  query workout($dayOfTheWeek: String!) {
    workout(dayOfTheWeek: $dayOfTheWeek) {
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
export const QUERY_PROFILES = gql`
  query allWorkouts {
    workouts {
      dayOfTheWeek
      exerciseName
      weight
      sets
      reps
      other
    }
  }
`