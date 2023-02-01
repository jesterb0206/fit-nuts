import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks{
        authors
        bookId
        description
        title
        image
        link
      }
    }
  }
`

export const QUERY_WORKOUT = gql`
  query getWorkout{
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
`
