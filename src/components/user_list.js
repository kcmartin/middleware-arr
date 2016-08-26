//container component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  // render a single user
  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary" href={user.website}>Website</a>
      </div>
    );
  }

  render() {
    // need to map over users list
    return (
      /* for each user, call the helper function renderUser and return it
      into the jsx div */
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
