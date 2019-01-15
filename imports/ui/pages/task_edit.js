import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

import {Tasks} from '../../api/tasks.js';
import './task_edit.html';

let taskId;

Template.Task_edit_page.onCreated(function bodyOnCreated(){
  taskId = this.data.taskId();
  Meteor.subscribe('tasks');
});

Template.Task_edit_page.helpers({
  task(){
    if(taskId){
      let task = Tasks.findOne(taskId);
      return task.text;
    }
    else
    {
      return "";
    }
  }
});

Template.Task_edit_page.events({
  'submit .new-task'(event){
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    Meteor.call ('tasks.update', taskId, context);
    FlowRouter.go('/tasks');
  }
});
