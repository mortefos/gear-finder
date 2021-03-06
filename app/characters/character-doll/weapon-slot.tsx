import React from "react";

import ItemSlot from "./item-slot";
import { Poe } from "../../../common";

const WeaponSlot = ({
  activeSet,
  weapon1,
  weapon2,
  onSwitchWeaponSet,
  onClick
}: {
  activeSet: 1 | 2;
  weapon1?: Poe.Item;
  weapon2?: Poe.Item;
  onSwitchWeaponSet: () => void;
  onClick: (item: Poe.Item) => void;
}) => (
  <>
    <div
      onClick={onSwitchWeaponSet}
      style={{
        display: "flex",
        alignContent: "right",
        fontWeight: "bolder",
        padding: "2px",
        border: "1px solid black",
        cursor: "pointer"
      }}
    >
      {activeSet === 1 ? <span>I</span> : <span>II</span>}
    </div>
    <ItemSlot onClick={onClick} item={activeSet === 1 ? weapon1 : weapon2} />
  </>
);

export default WeaponSlot;
