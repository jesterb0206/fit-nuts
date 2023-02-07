const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        workout: [Workout]
    }
    type Workout {
        _id: ID!
        dayOfTheWeek: String!
        exerciseName: String!
        weight: Int!
        sets: Int
        reps: Int
        other: String
    }
    type Auth {
        token: ID!
        user: User
      }
    input MessageInput {
        exerciseName: String!
        workoutId: ID!
        weight: Int!
        sets: Int
        reps: Int
        other: String
    }
    type Query {
        me: User
        users: [User]
        workout( dayOfTheWeek: String! ): [Workout]
        workouts: [Workout]!
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addExercise(dayOfTheWeek: String, exerciseName: String!, weight: Int!, sets: Int, reps: Int, other: String) : Workout
        deleteWorkout(_id: ID! ) : Workout
        updateSets(_id: ID!, sets: Int): Workout
        updateReps( _id: ID!, reps: Int) : Workout
        summaryPage(summary: MessageInput ): User
    }
`

module.exports = typeDefs;