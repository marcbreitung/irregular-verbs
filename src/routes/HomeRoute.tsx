import { faGraduationCap, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import IntroHeader from "../components/UI/Header/IntroHeader";
import AppPage from "../components/UI/Page/AppPage";
import Teaser from "../components/UI/Teaser/Teaser";
import TeaserGroup from "../components/UI/Teaser/TeaserGroup";
import Settings from "../components/Settings/Settings";
import { currentPage } from "../utils/vocabulary.utils";

const HomeRoute = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerHanlder = () => setDrawerOpen((prevState) => !prevState);
  const current = currentPage();

  return (
    <AppPage>
      <IntroHeader title="Irregular Verbs Trainer" onSettingsClick={toggleDrawerHanlder} />
      <TeaserGroup>
        <Teaser title="Learn" icon={faGraduationCap} link={`/learn/${current.infinitive}/show`} />
        <Teaser title="Progress" icon={faListCheck} link="/progress" />
      </TeaserGroup>
      <Drawer open={drawerOpen} onClose={toggleDrawerHanlder} title="Settings">
        <Settings />
      </Drawer>
    </AppPage>
  );
};

export default HomeRoute;
