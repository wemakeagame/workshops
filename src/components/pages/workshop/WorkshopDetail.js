import React from "react";
import Loading from "../../shared/Loading";
import Page from "../../shared/Page";
import Details from "../../shared/Details";
import { getMyWorkshopById } from "../../../core/services/workshopService";
import { withRouter } from "react-router";

class WorkshopDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      errorMsg: null,
      details: []
    };
  }

  componentDidMount() {
    getMyWorkshopById(this.props.match.params.id, (error, result) => {
      debugger;
      if (error) {
        this.setState({
          errorMsg: "It wasn't possible to load this workshop data"
        });
      } else {
        const details = [...this.state.details];
        details.push(
          {
            label: "Title",
            value: result.title
          },
          {
            label: "Description",
            value: result.description
          }
        );
        this.setState({ details: details });
      }

      this.setState({ isLoading: false });
    });
  }

  render() {
    const loading = <Loading />;

    const content = <Details elements={this.state.details} />;

    const errorMsg = <p className="error">{this.state.errorMsg}</p>;
    return (
      <Page>
        {this.state.isLoading
          ? loading
          : this.state.errorMsg
          ? errorMsg
          : content}
      </Page>
    );
  }
}

export default withRouter(WorkshopDetail);
