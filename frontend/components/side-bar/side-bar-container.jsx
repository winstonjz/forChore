import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { fetchUserGroups } from '../../actions/user_actions';
import SideBar from './side-bar';
import { createAGroup, fetchAndDeleteGrouping, leaveGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import { filterUser } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUserId: state.session.currentUser.id,
    groups: state.user.groups,
    housemates: state.group.housemates,
    filter: state.filter.id  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserGroups: () => dispatch(fetchUserGroups()),
    leaveGroup: (userId, groupId) => dispatch(leaveGroup(userId, groupId)),
    filterUser: (id) => dispatch(filterUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
