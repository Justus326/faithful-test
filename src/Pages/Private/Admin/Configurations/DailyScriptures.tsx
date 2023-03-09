import React, { useState } from "react";
import PrimaryButton from "../../../../Components/Form/Buttons/PrimaryButton";
import RouteWrapper from "../../../../Layouts/RouteWrapper";
import ScriptureCard from "../../../../Layouts/ScriptureCard";
import AddScripture from "./AddScripture";
import EditScripture from "./EditScripture";
import { DailyScripturesContainer, ScripturesContainer } from "./style";

const DailyScriptures = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <RouteWrapper>
      <DailyScripturesContainer>
        <PrimaryButton
          text="Add Scripture"
          size="medium"
          handleClick={() => {
            setShowAdd(true);
            setShowEdit(false);
          }}
        />
        {showAdd && !showEdit && <AddScripture setState={setShowAdd} />}
        {showEdit && !showAdd && <EditScripture setState={setShowEdit} />}
        <ScripturesContainer>
          <ScriptureCard setEdit={setShowEdit} setAdd={setShowAdd} />
          <ScriptureCard setEdit={setShowEdit} setAdd={setShowAdd} />
          <ScriptureCard setEdit={setShowEdit} setAdd={setShowAdd} />
          <ScriptureCard setEdit={setShowEdit} setAdd={setShowAdd} />
        </ScripturesContainer>
      </DailyScripturesContainer>
    </RouteWrapper>
  );
};

export default DailyScriptures;
