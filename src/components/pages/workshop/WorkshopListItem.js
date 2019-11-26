import React from "react";
import Panel from "../../shared/Panel";
import Details from "../../shared/Details";

export default class WorkshopListItem extends React.Component {
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
        <div className="wrs-banner">
          <img src={item.image} alt="workshop banner" />
        </div>
        <Details elements={els} />
      </Panel>
    );
  }
}
