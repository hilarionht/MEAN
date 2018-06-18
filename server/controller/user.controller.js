const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
    console.log(req.body);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dateAdd: req.body.dateAdd,
        role: req.body.role,
        google: req.body.google,
        status: req.body.status                             
    });
    await user.save();
    res.json({status: 'User created'});
};

userCtrl.getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dateAdd: req.body.dateAdd,
        role: req.body.role,
        google: req.body.google,
        status: req.body.status
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User Updated'});
};

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
};

module.exports = userCtrl;