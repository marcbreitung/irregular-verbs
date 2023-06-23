import { useEffect, useState } from "react";
import { VerbType } from "../../model/app.model";
import ProgressBar from "../UI/Progress/ProgressBar";
import LearnVerbShow from "./LearnVerbShow";
import VerbNavigation from "../UI/Verb/VerbNavigation";
import VerbOptions, { OptionType } from "../UI/Verb/VerbOptions";
import LearnVerbListen from "./LearnVerbListen";
import LearnVerbWrite from "./LearnVerbWrite";
import { useNavigate, useParams } from "react-router-dom";
import { getVerbByInfinitive, updateLearnProgress } from "../../utils/vocabulary.utils";

type LearnVerbProps = {
  verb: VerbType;
  dictionaryUrl: string;
  onNext?: () => void;
  onPrevious?: () => void;
};

const LearnVerb = ({ verb, dictionaryUrl, onNext, onPrevious }: LearnVerbProps) => {
  const navigate = useNavigate();
  const { option: optionId } = useParams();
  const [option, setOption] = useState<OptionType>(optionId as OptionType);

  const [learnVerb, setLearnVerb] = useState<VerbType>(verb);

  const changeOptionHandler = (option: OptionType) => {
    navigate(`/learn/${verb.infinitive}/${option}`);
  };

  const updateProgressHandler = (verb: VerbType, status: boolean) => {
    updateLearnProgress(verb, status);
    setLearnVerb(getVerbByInfinitive(verb.infinitive));
  };

  useEffect(() => {
    setOption(optionId as OptionType);
  }, [optionId]);

  useEffect(() => {
    setLearnVerb(verb);
  }, [verb]);

  return (
    <article className="flex-grow flex flex-col justify-between">
      <div className="flex-grow flex flex-col justify-center">
        <div>
          <VerbNavigation verb={learnVerb} onNext={onNext} onPrevious={onPrevious} dictionaryUrl={dictionaryUrl} />
          <ProgressBar value={(learnVerb.correct / (learnVerb.correct + learnVerb.wrong)) * 100} />
        </div>
      </div>
      {option === "show" && <LearnVerbShow verb={learnVerb} />}
      {option === "listen" && <LearnVerbListen verb={learnVerb} onUpdateProgress={updateProgressHandler} />}
      {option === "write" && <LearnVerbWrite verb={learnVerb} onUpdateProgress={updateProgressHandler} />}
      <VerbOptions option={option} onChangeOption={changeOptionHandler} />
    </article>
  );
};

export default LearnVerb;
