function TodoCtrl($scope) {

	$scope.todos = [{text: 'Learn AngularJS', done: false}, 
									{text: 'Wanderlust', done: false}];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	}

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		})
	}

	$scope.editTodo = function() {
		if ($(this).hasClass('done-false')) {
			console.log('working');
		} else {
			console.log(this);
		}
	}
}