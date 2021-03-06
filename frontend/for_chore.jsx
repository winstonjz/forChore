import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as Api from './util/session_api_util';
import configureStore from './store/store';
import * as Actions from './actions/session_actions';
import * as GroupApi from './util/group_api_util';
import * as GroupAction from './actions/group_actions';
import * as UserAction from './actions/user_actions';
import * as ChoreAction from './actions/chore_actions';
import * as CommentAction from './actions/comment_actions';

window.createComment = CommentAction.createComment;

window.completeChore = ChoreAction.completeChore;
window.createChore = ChoreAction.createChore;
window.fetchUserGroups = UserAction.fetchUserGroups;
window.fetchUsers = UserAction.fetchUsers;

window.patchGroup = GroupApi.patchGroup;
window.editGroup = GroupAction.editGroup;
window.createAGroup = GroupAction.createAGroup;
window.fetchAGroup = GroupAction.fetchAGroup;
window.leaveGroup = GroupAction.leaveGroup;

window.createGroup = GroupApi.createGroup;
window.fetchGroup = GroupApi.fetchGroup;
window.fetchGrouping = GroupApi.fetchGrouping;
window.leaveGroup = GroupApi.leaveGroup;

window.signup = Actions.signup;
window.login = Actions.login;
window.logout = Actions.logout;


document.addEventListener('DOMContentLoaded', () => {
let store;
if (window.currentUser) {
  const preloadedState = {session: {currentUser: window.currentUser}};
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
});
