const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const workoutsSchema = new Schema({
        
            dayOfTheWeek: {
                type:String, 
                require: false
            },
            exerciseName: {
                type: String,
                require: true,
                minlength: 1,
                maxlength: 280,
                trim: true
            },
            weight: {
                type: Number,
                require: true,
                minlength: 1,
                maxlength: 10000,
            },
            sets: {
                type: Number,
                require: false,
            },
            reps: {
                type: Number,
                require: false,
            },
            other: {
                type: String,
                require: false,
            }

})

const Workout = model('Workout', workoutsSchema);

module.exports = Workout;