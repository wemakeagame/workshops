import React from "react";
import RegisterForm from "./RegisterForm";
import { addUser } from "../../../core/services/userService";
import { Link } from "react-router-dom";
import Loading from "../../shared/Loading";
import Page from "../../shared/Page";
import Panel from "../../shared/Panel";

export default class RegisterUser extends React.Component {
  hasRegistered = false;

  constructor(props) {
    super(props);

    this.state = {
      errorMsg: "",
      hasRegistered: false,
      isLoading: false
    };
  }

  register = (action, data) => {
    if (action === "submitRegister") {
      if (data.password !== data.repassword) {
        this.setState({ errorMsg: "Password don't match" });
        return;
      }
      this.setState({ isLoading: true });
      addUser(data, error => {
        if (!error) {
          console.log("registered");
          this.setState({ hasRegistered: true });
        } else {
          console.error(error);
        }
        this.setState({ isLoading: false });
      });
    }
  };

  render() {
    const form = (
      <React.Fragment>
        <h3 className="text-center">
          Please fill all required fields in order to register
        </h3>
        <RegisterForm action={this.register} errorMsg={this.state.errorMsg} />
      </React.Fragment>
    );

    const loading = <Loading loadingMsg="Saving your registration..." />;

    const afterRegister = (
      <div>
        <h3>You registration was successful, please procced with login</h3>
        <Link to="/login">Login</Link>
      </div>
    );

    const content = this.state.hasRegistered ? afterRegister : form;

    return (
      <Page className="login-page">
        {this.state.isLoading ? loading : content}
      </Page>
    );
  }
}
