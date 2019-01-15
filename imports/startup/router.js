//Landing pages

FlowRouter.route('/', {
	action:function(){
	BlazeLayout.render('App_Body', {main:'Prompt_page'});
	}
});

let taskGroup = FlowRouter.group({
	prefix:"/tasks",
	triggersEnter: [isUserLoggedIn],
});

taskGroup.route('/', {
	action:function(){
		BlazeLayout.render ('App_Body', {main:'Landing_page'})
	}
});

taskGroup.route('/edit/:taskId',{
	action: function(params, queryParams){
		var taskId =FlowRouter.getParams("taskId");
		BlazeLayout.render('App_Body', {main: 'Task_edit_page', taskId:taskId});
	}
});

FlowRouter.route('/logout', {
	action:function(){
		Meteor.logout(function(){
			FlowRouter.go('/');
		});
	}
});

function isUserLoggedIn(context){
	if(Meteor.userId()){
		FlowRouter.current();
	}
	else {
		FlowRouter.go('/');
	}
}
