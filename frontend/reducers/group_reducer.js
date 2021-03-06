import {
  RECEIVE_GROUP,
  RECEIVE_GROUP_ERRORS,
  CLEAR_ERRORS,
  LEAVE_GROUP
} from '../actions/group_actions';

import merge from 'lodash/merge';

const _defaultState = {
  title: '',
  housemates: {},
  chores: {},
  errors: []
};

const GroupReducer = function(state = _defaultState, action) {
  let newState = state;
  switch(action.type){
    case RECEIVE_GROUP:
      console.log("receiving group:", action.group);
      return merge({}, _defaultState, action.group);
    case RECEIVE_GROUP_ERRORS:
      newState.errors = action.errors;
      return merge({}, newState);
    case CLEAR_ERRORS:
      let errorState = state;
      errorState.errors = [];
      return merge({}, errorState);
    default:
      return state;
  }
};

export default GroupReducer;
