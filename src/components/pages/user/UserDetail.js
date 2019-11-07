import React from "react";
import Loading from "../../shared/Loading";
import { getUserById } from "../../../core/services/userService";
import { withRouter } from "react-router";

import "./UserDetail.css";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      isLoading: true,
      hasError: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true, hasError: false });

    getUserById(this.props.match.params.id, (error, data) => {
      if (error) {
        this.setState({ hasError: true, isLoading: false });
      } else {
        this.setState({ isLoading: false, userData: data });
      }
    });
  };

  render() {
    const error = (
      <div>
        <h3 className="error">It was not possible to load the details</h3>
      </div>
    );

    const details = this.state.hasError ? (
      error
    ) : (
      <div>
        <h3>My details</h3>
        <div className="panel">
          <div className="details">
            <div>
              <label>Name</label>
              <p>
                {this.state.userData.name} {this.state.userData.surname}
              </p>
            </div>
            <div>
              <label>UserName</label>
              <p>{this.state.userData.username}</p>
            </div>
            <div>
              <label>E-mail</label>
              <p>{this.state.userData.email}</p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.history.push("/user/edit/" + this.state.userData.id)
            }
          >
            Edit
          </button>
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
