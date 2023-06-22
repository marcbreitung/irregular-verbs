import { useContext } from "react";
import LearnProgress from "./LearnProgress";
import { SettingsContext } from "../../store/settings-context";
import { VerbType } from "../../model/app.model";

type ProgressProps = {
  verbs: VerbType[];
};

const Progress = ({ verbs }: ProgressProps) => {
  const { dictionaryUrl } = useContext(SettingsContext);

  return <LearnProgress verbs={verbs} dictionaryUrl={dictionaryUrl} />;
};

export default Progress;
