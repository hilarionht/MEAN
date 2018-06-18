const express = require('express');
const router = express.Router();

const taskCtrl = require('../controller/task.controller');
router.get('/', taskCtrl.getTasks);
router.post('/', taskCtrl.createTask);
router.get('/:id', taskCtrl.getTask);
router.put('/:id', taskCtrl.editTask);
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;