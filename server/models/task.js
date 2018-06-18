const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema ({
    name: {type: String, required: true },
    description: {type: String, required: true},
    dateAdd: { type: Date, required: true },
    status: {type:  Boolean,required: true, default: true },
    user: {type: Schema.Types.ObjectId, ref: 'User' },
    umod: {type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Task', TaskSchema)