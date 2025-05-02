const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    status:{
        type: String,
        required: true,
        Enumerator:['Pending','In Progress','Completed'],
        default:'Pending'
    },
    createdAt:{
        type: Date,
        default: Date.now
    },

    completedAt: {
        type: Date,
    }



});

const TaskModel = mongoose.model('todos', TaskSchema);
module.exports = TaskModel;