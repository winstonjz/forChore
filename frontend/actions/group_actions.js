export const CREATE_A_GROUP = "CREATE_A_GROUP";
export const FETCH_A_GROUP = "FETCH_A_GROUP";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const SEND_ERRORS = "SEND_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const DELETE_GROUP = "DELETE_GROUP";
export const FETCH_GROUPING = "FETCH_GROUPING";
export const LEAVE_GROUP = "LEAVE_GROUP";
export const EDIT_GROUP = "EDIT_GROUP";

export const createAGroup = (group) => ({
  type: CREATE_A_GROUP,
  group
});

export const fetchAGroup = (id) => ({
  type: FETCH_A_GROUP,
  id
});

export const editGroup = (id, group) => ({
  type: EDIT_GROUP,
  group,
  id
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


//
// export const deleteGroup = (id) => ({
//   type: DELETE_GROUP
// });
//
// export const deleteGrouping = (id) => ({
//   type: DELETE_GROUPING,
//   id
// });

export const leaveGroup = (userId, groupId) => ({
  type: LEAVE_GROUP,
  userId: userId,
  groupId: groupId
});
