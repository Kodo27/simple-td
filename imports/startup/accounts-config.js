import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Accounts.onLogin(function(){
    if(FlowRouter.current().route.path == '/'){
      FlowRouter.go('/tasks');
    }
});
