const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {

    Query: {
        me: async(parent, { dayOfTheWeek }, context ) => {
            if( context.user ) {
                return await User.findOne({ _id: context.user._id}).select('-__v -password').populate({path: 'workouts', match: {dayOfTheWeek: dayOfTheWeek }
            });
            }
        },
        workouts: async ( parent, arg, context) => {
            if( context.user) {
                return await User.findOne({ _id: context.user._id}).select('-__v -password').populate('workouts');
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
          },
        addExercise: async(parent, { dayOfTheWeek, exerciseName, weight, sets, reps, other }, context) => {
            if(context.user) {
                const workout = await Workout.create({ dayOfTheWeek, exerciseName, weight, sets, reps, other });
                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { workouts: workout._id } }
                    )
                    return workout;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteWorkout: async(parent, { _id }, context  ) => {
            if(context.user) {
                const workout = await Workout.findOneAndDelete({
                    _id: _id,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $pull: { workouts: workout._id } }
                )
                return workout;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateSets: async(parent, { _id, sets }, context) => {
            if(context.user) {
                return await Workout.findOneAndUpdate (
                    {_id: _id},
                    { $set: {sets: sets} },
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateReps: async(parent, { _id, reps }, context) => {
            if(context.user) {
                return await Workout.findOneAndUpdate (
                    { _id: _id },
                    { $set: {reps: reps} },
                )
            }
        },
    }
}

module.exports = resolvers;