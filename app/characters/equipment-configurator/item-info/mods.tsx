import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";

import { Poe } from "../../../../common";
import { Plus } from "../../../components/icons";

export interface ModsProps {
  implicitMods: string[];
  explicitMods: string[];
  onClick: (mod: Poe.ItemModSearch) => void;
}

interface ModLineProps {
  mod: Poe.ItemMod;
  onClick: (mod: Poe.ItemModSearch) => void;
}

const Container = styled.div`
  grid-column: 2;
`;

const ModLines = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
`;

const ModLine: React.FunctionComponent<ModLineProps> = ({ mod, onClick }) => {
  // const { stats } = useContext(Poe.PoeContext);
  const stats: any = [];

  return (
    <ModLines>
      <Plus />
      {/* <IconButton
        icon="add_circle"
        onClick={() => {
          const search = stats.find(mod);
          if (!!search) {
            onClick(search);
          }
        }}
      /> */}
      {mod.text}
    </ModLines>
  );
};

const Mods: React.FunctionComponent<ModsProps> = ({
  implicitMods,
  explicitMods,
  onClick
}) => (
  <Container>
    {implicitMods && (
      <>
        <h1>Implicit</h1>
        {implicitMods.map((text: string, index: number) => {
          const itemMod: Poe.ItemMod = { type: Poe.StatType.Implicit, text };
          return <ModLine key={index} mod={itemMod} onClick={onClick} />;
        })}
      </>
    )}

    {explicitMods && (
      <>
        <h1>Explicit</h1>
        {explicitMods.map((text: string, index: number) => {
          const itemMod: Poe.ItemMod = { type: Poe.StatType.Explicit, text };
          return <ModLine key={index} mod={itemMod} onClick={onClick} />;
        })}
      </>
    )}
  </Container>
);

export default Mods;
