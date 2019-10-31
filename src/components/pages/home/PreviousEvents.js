import React from "react";
import { eventListMockData } from "./Home.mock";
import ListEvent from "../../shared/ListEvent";

export default function PreviousEvents(props) {
  return (
    <div className="previous-events event-display">
      <h3>Previous Events</h3>
      <ListEvent
        items={eventListMockData}
        maxChar={props.maxChar}
        showImage={false}
      />
    </div>
  );
}
