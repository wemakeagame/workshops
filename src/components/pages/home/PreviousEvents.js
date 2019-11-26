import React from "react";
import ListEvent from "../../shared/ListEvent";
import { workshops } from "../../../core/workshop.mock";

export default function PreviousEvents(props) {
  return (
    <div className="previous-events event-display">
      <h3>Previous Events</h3>
      <ListEvent items={workshops} maxChar={props.maxChar} showImage={false} />
    </div>
  );
}
