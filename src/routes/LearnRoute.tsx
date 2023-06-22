import { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import Learn from "../components/LearnVerb/Learn";
import Settings from "../components/Settings/Settings";
import MainHeader from "../components/UI/Header/MainHeader";
import AppPage from "../components/UI/Page/AppPage";
import { getVerbByInfinitive } from "../utils/vocabulary.utils";
import { useLoaderData } from "react-router-dom";
import { VerbType } from "../model/app.model";

export const learnLoader = ({ params }: any): VerbType => {
  return getVerbByInfinitive(params.verb);
};

const LearnRoute = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerHanlder = () => setDrawerOpen((prevState) => !prevState);
  const verb = useLoaderData() as VerbType;

  return (
    <AppPage>
      <MainHeader title="Irregular Verbs Trainer" onSettingsClick={toggleDrawerHanlder} />
      <Learn verb={verb} />
      <Drawer open={drawerOpen} onClose={toggleDrawerHanlder} title="Settings">
        <Settings />
      </Drawer>
    </AppPage>
  );
};

export default LearnRoute;
