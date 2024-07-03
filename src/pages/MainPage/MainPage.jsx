import { Container } from "@mui/material";
import React, { useState } from "react";
import TabsComponent from "../../components/Tabs/Tabs";
import Souz from "../../components/Souz/Souz";
import History from "../../components/History/History";

const VALUES = {
  souz: "souz",
  project: "project",
  history: "history",
  global: "global",
  ourTeam: "our team",
};

const GetCategories = ({ tab }) => {
  switch (tab) {
    case VALUES.souz:
      return <Souz />;
    case VALUES.project:
      return <div>project</div>;
    case VALUES.history:
      return <History />;
    case VALUES.global:
      return <div>global</div>;
    case VALUES.ourTeam:
      return <div>our team</div>;
    default:
      return <div>souz</div>;
  }
};

const MainPage = () => {
  const categoriesSelect = [
    { value: VALUES.souz, label: "souz" },
    { value: VALUES.project, label: "project" },
    { value: VALUES.history, label: "history" },
    { value: VALUES.global, label: "global" },
    { value: VALUES.ourTeam, label: "our team" },
  ];
  const [value, setValue] = useState(categoriesSelect?.[0].value);


  return (
    <Container>
      <TabsComponent
        value={value}
        setValue={setValue}
        categoriesSelect={categoriesSelect}
      />
      <GetCategories tab={value} />
    </Container>
  );
};

export default MainPage;
