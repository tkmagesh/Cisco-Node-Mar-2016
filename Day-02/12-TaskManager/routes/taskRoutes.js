var express = require('express');
var router = express.Router();

var tasks = [
	{id : 1, name : 'Plan for vacation', isCompleted : false},
	{id : 2, name : 'Fix that bug', isCompleted : false},
	{id : 3, name : 'Master JavaScript', isCompleted : true},
	{id : 4, name : 'Watch a movie', isCompleted : true}
]

/* GET home page. */
router.get('/', function(req, res, next) {
	var viewData = {list : tasks}
  res.render('tasks/list', viewData);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTask = {
		id : tasks.reduce(function(result, task){
			return result > task.id ? result : task.id
		}, 0) + 1,
		name : req.body.taskName,
		isCompleted : false
	};
	tasks.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	console.log(req.params);
	var taskId  = parseInt(req.params.id);
	var task = tasks.filter(function(t){
		return t.id === taskId;
	})[0];
	if (task) task.isCompleted = !task.isCompleted;
	res.redirect('/tasks');
})
module.exports = router;
