import React from "react";
import Panel from "../../shared/Panel";
import Page from "../../shared/Page";
import { getMyWorkshops } from "../../../core/services/workshopService";
import auth from "../../../core/auth";
import Loading from "../../shared/Loading";
import WorkshopList from "./WorkshopList";

import "./Workshop.css";

export default class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myWorkShops: [],
      participatingWorkshops: [],
      completedWorkshops: [],
      isLoadingMyWorkshop: true,
      isLoadingParticipatingWorkshop: true,
      isLoadingCompletedWorkshop: true
    };
  }

  componentDidMount() {
    getMyWorkshops(auth.getUserData(), (error, result) => {
      if (!error) {
        this.setState({ myWorkShops: result, isLoadingMyWorkshop: false });
      }
    });
  }

  render() {
    const loading = <Loading />;
    return (
      <Page>
        <h3>Workshops</h3>
        <Panel title="My Workshops" canCollapse={true}>
          {this.state.isLoadingMyWorkshop ? (
            loading
          ) : (
            <WorkshopList items={this.state.myWorkShops} />
          )}
        </Panel>
        <Panel title="Participating" canCollapse={true}>
          test
        </Panel>
        <Panel title="Completed workshops" canCollapse={true}>
          test
        </Panel>
      </Page>
    );
  }
}
