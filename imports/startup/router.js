//Landing pages

FlowRouter.route('/', {
	action:function(){
		if(Meteor.userId())
		{
			//if logged in
				BlazeLayout.render('App_Body',{main:'Landing_page'} );
		}
		else
		{
			//if not logged in
			BlazeLayout.render('App_Body',{main:'Prompt_page'} );
		}
	}
});

FlowRouter.route('/tasks', {
	action:function(){
		BlazeLayout.render('App_Body', {main:'Landing_page'}
		);
	}
});

FlowRouter.route('/logout', {
	action:function(){
		Meteor.logout(function(){
			FlowRouter.go('/');
		});
	}
});
