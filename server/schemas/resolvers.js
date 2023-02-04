const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth')


const resolvers = {

    Query: {
        me: async (parent, { userId }, context) => {
            if (context.user) {
                const user = User.findOne({ _id: context.user._id }).select('-__v -password').populate('workout');
                console.log(user)
                return await User.findOne({ _id: context.user._id }).select('-__v -password').populate('workout');

                // const user = User.findOne({ _id: userId._id}).select('-__v -password')
                // console.log(user)
                // return await User.findOne({ _id: userId._id}).select('-__v -password');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        workout: async (parent, { dayOfTheWeek }, context) => {
            // if( context.user ) {
            const user = Workout.find({ dayOfTheWeek: dayOfTheWeek }).select('-__v -password')
            console.log(user)
            return await Workout.find({ dayOfTheWeek: dayOfTheWeek }).select('-__v -password')
            // }
            // throw new AuthenticationError('You need to be logged in!');
        },

        workouts: async () => {
            return Workout.find();
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
        addExercise: async (parent, { dayOfTheWeek, exerciseName, weight, sets, reps, other }, context) => {
            // console.log(context.user);
            // console.log(context.user._id);
            if (context.user) {
                const workout = await Workout.create({ dayOfTheWeek, exerciseName, weight, sets, reps, other });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { workouts: workout._id } }
                )

                return workout;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeWorkout: async (parent, { workoutId }, context) => {
            if (context.user) {
                const workout = await Workout.findOneAndDelete({
                    _id: workoutId,

                });


                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { workouts: workoutId } }
                )

                return workout;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateSets: async (parent, { workoutId, sets }, context) => {
            if (context.user) {
                return await Workout.findOneAndUpdate(
                    { _id: workoutId },
                    { $set: { sets: sets } },
                    {
                        new: true,
                        runValidators: true,
                    }
                )
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        updateReps: async (parent, { workoutId, reps }, context) => {
            if (context.user) {
                return await Workout.findOneAndUpdate(
                    { _id: workoutId },
                    { $reps: { reps: reps } },
                    {
                        new: true,
                        runValidators: true,
                    }
                )
            }
        },
        updateWorkoutDay: async (parent, { dayOfTheWeek }, context) => {

            if (context.user) {
                await Workout.findOneAndDelete(
                    { dayOfTheWeek: dayOfTheWeek }
                )
                await User.findOneAndUpdate(
                    { workout_id: workout_id }
                )
                const workout = await Workout.create({ dayOfTheWeek, exerciseName, weight, sets, reps, other });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { workouts: workout._id } }
                )

                return workout;

            }
        }
    }
}

module.exports = resolvers;