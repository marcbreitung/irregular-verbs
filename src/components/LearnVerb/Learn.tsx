import { useContext } from "react";
import { nextPage, previousPage } from "../../utils/vocabulary.utils";
import { SettingsContext } from "../../store/settings-context";
import LearnVerb from "./LearnVerb";
import { useNavigate } from "react-router-dom";
import { VerbType } from "../../model/app.model";

type LearnProps = {
  verb: VerbType;
};

const Learn = ({ verb }: LearnProps) => {
  const { dictionaryUrl } = useContext(SettingsContext);
  const navigate = useNavigate();

  const navigateNextHandler = () => {
    navigate(`/learn/${nextPage().infinitive}/show`);
  };

  const navigatePreviousHandler = () => {
    navigate(`/learn/${previousPage().infinitive}/show`);
  };

  return (
    <LearnVerb
      verb={verb}
      onNext={navigateNextHandler}
      onPrevious={navigatePreviousHandler}
      dictionaryUrl={dictionaryUrl}
    />
  );
};

export default Learn;
