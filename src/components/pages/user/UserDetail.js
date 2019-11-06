import React from "react";
import Loading from "../../shared/Loading";
import { getUserById } from "../../../core/services/userService";
import { withRouter } from "react-router";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      isLoading: true
    };
  }

  componentDidMount = () => {
    getUserById(this.props.match.params.id, (error, data) => {
      this.setState({ isLoading: false, userData: data });
      console.log(data);
    });
  };

  render() {
    const details = (
      <div>
        <h3>My details</h3>
        <div className="panel">
          <label>Name</label>
          <p>
            {this.state.userData.name} {this.state.userData.surname}
          </p>
        </div>
      </div>
    );
    const loading = <Loading />;

    return (
      <div className="user-detail-page container page">
        <div className="panel">{this.state.isLoading ? loading : details}</div>
      </div>
    );
  }
}

export default withRouter(UserDetail);
