import React from "react";
import Panel from "../../shared/Panel";
import Details from "../../shared/Details";
import { withRouter } from "react-router";

class WorkshopListItem extends React.Component {
  open = () => {
    this.props.history.push("/workshop/detail/" + this.props.item.id);
  };

  edit = () => {};

  render() {
    const item = this.props.item;

    const els = [
      { label: "Description", value: item.description },
      {
        label: "Start date",
        value: new Date(item.startDateTime).toLocaleString()
      },
      {
        label: "End date",
        value: new Date(item.endDateTime).toLocaleString()
      }
    ];

    return (
      <Panel title={item.title} canCollapse={true} isCollapsed={true}>
        <div className="actions text-right">
          <button className="btn btn-primary" onClick={this.open}>
            View
          </button>
          <button className="btn btn-primary">Edit</button>
        </div>
        <div className="wrs-banner">
          <img src={item.image} alt="workshop banner" />
        </div>
        <Details elements={els} />
      </Panel>
    );
  }
}

export default withRouter(WorkshopListItem);
