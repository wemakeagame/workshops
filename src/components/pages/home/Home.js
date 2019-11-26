import React from "react";

import Banner from "./Banner";
import UpcommingEvent from "./UpcommingEvents";
import PreviousEvents from "./PreviousEvents";
import "./Home.css";
import SearchEvent from "./SearchEvent";
import auth from "../../../core/auth";
import Page from "../../shared/Page";

export default function Home() {
  const userData = auth.getUserData();
  const welcomeMsg = auth.isAuthenticated()
    ? "Welcome " + userData.name + " " + userData.surname
    : "";

  return (
    <Page className="home-page">
      <div className="text-right info">{welcomeMsg}</div>
      <div className="banner">
        <Banner />
      </div>
      <div className="search-wrapper">
        <SearchEvent />
      </div>
      <div className="workshop-wrapper">
        <UpcommingEvent />
        <PreviousEvents maxChar={100} />
      </div>
    </Page>
  );
}
