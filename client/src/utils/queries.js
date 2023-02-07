import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me($dayOfTheWeek: String!) {
    me(dayOfTheWeek: $dayOfTheWeek) {
      _id
      username
      email
      workouts {
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
export const QUERY_WORKOUTS = gql`
query workouts {
  workouts {
    _id
    username
    email
    workouts {
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