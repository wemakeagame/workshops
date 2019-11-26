import React from "react";
import UserEditForm from "./UserEditForm";
import UserPasswordChangeForm from "./UserPasswordChangeForm";
import {
  getUserById,
  updateUser,
  updatePassword
} from "../../../core/services/userService";
import { withRouter } from "react-router";
import Loading from "../../shared/Loading";
import auth from "../../../core/auth";
import Page from "../../shared/Page";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changePass: false,
      isLoading: true,
      userData: {},
      message: ""
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true, hasError: false });

    getUserById(this.props.match.params.id, (error, data) => {
      if (error) {
        this.setState({
          hasError: true,
          isLoading: false,
          errorMsg: "It wasn't possible to load your info"
        });
      } else {
        this.setState({ isLoading: false, userData: data });
      }
    });
  };

  onSubmitChanges = form => {
    this.updateUser(form.newPassword ? updatePassword : updateUser, form);
  };

  updateUser = (service, form) => {
    this.setState({ isLoading: true, hasError: false });
    form.id = this.state.userData.id;
    service(form, (error, data) => {
      if (error) {
        this.setState({
          hasError: true,
          isLoading: false,
          errorMsg: "It wasn't possible to update",
          message: ""
        });
      } else {
        this.setState({
          isLoading: false,
          userData: data,
          message: "Your information was updated",
          errorMsg: ""
        });
        auth.userData = data;
      }
    });
  };

  render() {
    const changePassForm = this.state.changePass && (
      <React.Fragment>
        <h3>Change Password</h3>
        <UserPasswordChangeForm onSubmit={this.onSubmitChanges} />
      </React.Fragment>
    );

    const loading = <Loading />;

    const changePassBtn = !this.state.changePass && (
      <button
        className="btn btn-link"
        onClick={() => {
          this.setState({ changePass: true });
        }}
      >
        Change password
      </button>
    );

    const content = (
      <React.Fragment>
        <UserEditForm
          onSubmit={this.onSubmitChanges}
          data={this.state.userData}
        />
        {changePassBtn}
        {changePassForm}
      </React.Fragment>
    );
    return (
      <Page>
        <h3>Edit My Info</h3>
        {this.state.message && <h2 className="info">{this.state.message}</h2>}
        {this.state.errorMsg && (
          <h2 className="error">{this.state.errorMsg}</h2>
        )}
        {this.state.isLoading ? loading : content}
      </Page>
    );
  }
}

export default withRouter(UserEdit);
