import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { VerbType } from "../../model/app.model";
import ButtonIcon from "../UI/Button/ButtonIcon";
import VerbItem, { StatusType } from "../UI/Verb/VerbItem";

type LearnVerbWriteProps = {
  verb: VerbType;
  onUpdateProgress: (verb: VerbType, status: boolean) => void;
};

const LearnVerbWrite = ({ verb, onUpdateProgress }: LearnVerbWriteProps) => {
  const [enteredInfinitive, setEnteredInfinitive] = useState("");
  const [enteredInfinitiveStatus, setEnteredInfinitiveStatus] = useState<StatusType>("default");

  const [enteredPastSimple, setEnteredPastSimple] = useState("");
  const [enteredPastParticipleStatus, setEnteredPastParticipleStatus] = useState<StatusType>("default");

  const [enteredPastParticiple, setEnteredPastParticiple] = useState("");
  const [enteredPastSimpleStatus, setEnteredPastSimpleStatus] = useState<StatusType>("default");

  const checkVerbs = () => {
    setEnteredInfinitiveStatus(enteredInfinitive === verb.infinitive ? "correct" : "wrong");
    setEnteredPastSimpleStatus(enteredPastSimple === verb.pastSimple ? "correct" : "wrong");
    setEnteredPastParticipleStatus(enteredPastParticiple === verb.pastParticiple ? "correct" : "wrong");
    const overallStatus =
      enteredInfinitive === verb.infinitive &&
      enteredPastSimple === verb.pastSimple &&
      enteredPastParticiple === verb.pastParticiple;
    onUpdateProgress(verb, overallStatus);
  };

  return (
    <div className="my-6">
      <ButtonIcon onClick={checkVerbs} size="sm">
        <FontAwesomeIcon icon={faSpellCheck} />
      </ButtonIcon>
      <VerbItem
        form="Infinitive"
        verb={enteredInfinitive}
        status={enteredInfinitiveStatus}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredInfinitive(event.target.value);
        }}
      />
      <VerbItem
        form="Past"
        verb={enteredPastSimple}
        status={enteredPastSimpleStatus}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredPastSimple(event.target.value);
        }}
      />
      <VerbItem
        form="Past Participle"
        verb={enteredPastParticiple}
        status={enteredPastParticipleStatus}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredPastParticiple(event.target.value);
        }}
      />
    </div>
  );
};

export default LearnVerbWrite;
