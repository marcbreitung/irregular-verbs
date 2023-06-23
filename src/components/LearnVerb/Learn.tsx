import { useContext } from "react";
import { nextPage, previousPage } from "../../utils/vocabulary.utils";
import { SettingsContext } from "../../store/settings-context";
import LearnVerb from "./LearnVerb";
import { useNavigate } from "react-router-dom";
import { VerbType } from "../../model/app.model";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div
        key={verb.infinitive}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-grow flex flex-col justify-between"
      >
        <LearnVerb
          verb={verb}
          onNext={navigateNextHandler}
          onPrevious={navigatePreviousHandler}
          dictionaryUrl={dictionaryUrl}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Learn;
