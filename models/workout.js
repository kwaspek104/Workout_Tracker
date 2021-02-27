const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
    day: {
      type: Date, 
      default: () => new Date()
    }, 
    exercises: [ 
      {
      type: { 
      type: String,
      trim: true,
      required: "Please choose an exercise type."
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise."
      },
      distance: {
        type: Number,
        trim: true,
        required: "."
      },
      duration: {
        type: Number,
        trim: true,
        required: "."
      },
      weight: {
        type: Number,
        trim: true,
        required: "."
      },
      sets: {
        type: Number,
        trim: true,
        required: "."
      },
      reps: {
        type: Number,
        trim: true,
        required: "."
      },
    }
    ]
});

const Workout = mongoose.model("Transaction", workoutSchema);

module.exports = Workout;
