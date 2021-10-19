const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        rwquired: [true, 'The todo text is required']
    }
})

//create model for todo 
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;