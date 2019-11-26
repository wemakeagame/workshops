import React from "react";
import Loading from "../../shared/Loading";
import { getUserById } from "../../../core/services/userService";
import { withRouter } from "react-router";

import "./UserDetail.css";
import Page from "../../shared/Page";
import Panel from "../../shared/Panel";

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
        <Panel>
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
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() =>
                this.props.history.push("/user/edit/" + this.state.userData.id)
              }
            >
              Edit
            </button>
          </div>
        </Panel>
      </div>
    );

    const loading = <Loading />;

    return (
      <Page className="user-detail-page">
        {this.state.isLoading ? loading : details}
      </Page>
    );
  }
}

export default withRouter(UserDetail);
