import React from "react";
import ListEvent from "../../shared/ListEvent";
import { workshops } from "../../../core/workshop.mock";

export default function UpcommingEvent(props) {
  return (
    <div className="upcomming-events event-display">
      <h3>Upcomming Events</h3>
      <ListEvent items={workshops} />
    </div>
  );
}
