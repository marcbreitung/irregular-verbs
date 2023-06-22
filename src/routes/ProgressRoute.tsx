import { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import Progress from "../components/LearnProgress/Progress";
import MainHeader from "../components/UI/Header/MainHeader";
import AppPage from "../components/UI/Page/AppPage";
import Settings from "../components/Settings/Settings";
import { VerbType } from "../model/app.model";
import { getRandomVerbs } from "../utils/vocabulary.utils";
import { useLoaderData } from "react-router-dom";

export const progressLoader = (): VerbType[] => {
  return getRandomVerbs();
};

const ProgressRoute = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerHanlder = () => setDrawerOpen((prevState) => !prevState);
  const verbs = useLoaderData() as VerbType[];

  return (
    <AppPage>
      <MainHeader title="Irregular Verbs Trainer" onSettingsClick={toggleDrawerHanlder} />
      <Progress verbs={verbs} />
      <Drawer open={drawerOpen} onClose={toggleDrawerHanlder} title="Settings">
        <Settings />
      </Drawer>
    </AppPage>
  );
};

export default ProgressRoute;
