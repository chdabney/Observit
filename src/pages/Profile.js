import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <img src="" alt="profile-pic" />
          <button>Change image</button>
        </div>
        <div>
          <button>Update User</button>
        </div>
        <div>
          <button>Delete User</button>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
