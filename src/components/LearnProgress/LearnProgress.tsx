import { VerbType } from "../../model/app.model";
import ProgressTable from "../UI/Progress/ProgressTable";

type LearnProgressProps = {
  verbs: VerbType[];
  dictionaryUrl: string;
};

const LearnProgress = ({ verbs, dictionaryUrl }: LearnProgressProps) => {
  return <ProgressTable progress={verbs} dictionaryUrl={dictionaryUrl} />;
};

export default LearnProgress;
