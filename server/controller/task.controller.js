const Task = require('../models/task');

const TaskCtrl = {};

TaskCtrl.getTasks = async (req, res, next) => {
    const Tasks = await Task.find();
    res.json(Tasks);
};

TaskCtrl.createTask = async (req, res, next) => {
    const Task = new Task({
        name: req.body.name,
        description: req.body.description,
        dateAdd: req.body.dateAdd,
        status: req.body.status,
        user: req.body.user,
        umod: req.body.umod                               
    });
    await Task.save();
    res.json({status: 'Task created'});
};

TaskCtrl.getTask = async (req, res, next) => {
    const { id } = req.params;
    const Task = await Task.findById(id);
    res.json(Task);
};

TaskCtrl.editTask = async (req, res, next) => {
    const { id } = req.params;
    const Task = {
        name: req.body.name,
        description: req.body.description,
        dateAdd: req.body.dateAdd,
        status: req.body.status,
        user: req.body.user,
        umod: req.body.umod  
    };
    await Task.findByIdAndUpdate(id, {$set: Task}, {new: true});
    res.json({status: 'Task Updated'});
};

TaskCtrl.deleteTask = async (req, res, next) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
};

module.exports = TaskCtrl;