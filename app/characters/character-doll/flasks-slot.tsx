import React from "react";

import ItemSlot from "./item-slot";
import { Poe } from "../../../common";

const FlaskSlots = ({
  flasks,
  onClick
}: {
  flasks: Poe.Item[];
  onClick: (item: Poe.Item) => void;
}) => (
  <div style={{ display: "flex" }}>
    {flasks
      ? flasks.map((flask, index) => (
          <ItemSlot onClick={onClick} key={index} item={flask} />
        ))
      : null}
  </div>
);

export default FlaskSlots;
