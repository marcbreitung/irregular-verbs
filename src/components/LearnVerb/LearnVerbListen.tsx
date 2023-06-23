import { faMicrophone, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useContext, useState } from "react";
import useSpeech from "../../hooks/useSpeech";
import { VerbType } from "../../model/app.model";
import { SettingsContext } from "../../store/settings-context";
import ButtonIcon from "../UI/Button/ButtonIcon";
import VerbItem, { StatusType } from "../UI/Verb/VerbItem";

type LearnVerbListenProps = {
  verb: VerbType;
  onUpdateProgress: (verb: VerbType, status: boolean) => void;
};

const LearnVerbListen = ({ verb, onUpdateProgress }: LearnVerbListenProps) => {
  const { voice } = useContext(SettingsContext);
  const [currentTense, setCurrentTense] = useState<string>("infinitive");
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const { listen, activity } = useSpeech({
    onResult: (result) => {
      if (result.tense === "infinitive") {
        setEnteredInfinitive(result.result);
        setCurrentTense("pastSimple");
      } else if (result.tense === "pastSimple") {
        setEnteredPastSimple(result.result);
        setCurrentTense("pastParticiple");
      } else if (result.tense === "pastParticiple") {
        setEnteredPastParticiple(result.result);
        setCurrentTense("infinitive");
      }
    },
    onError: (error, tense) => {
      console.log(error, tense);
    },
  });

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
    setIsValidated(true);
    const overallStatus =
      enteredInfinitive === verb.infinitive &&
      enteredPastSimple === verb.pastSimple &&
      enteredPastParticiple === verb.pastParticiple;
    onUpdateProgress(verb, overallStatus);
  };

  const listenVerbs = () => {
    if (voice === null) {
      return;
    }
    if (isValidated) {
      setCurrentTense("infinitive");
      setEnteredInfinitiveStatus("default");
      setEnteredPastSimpleStatus("default");
      setEnteredPastParticipleStatus("default");
      setIsValidated(false);
    }
    listen(currentTense, voice);
  };

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <ButtonIcon onClick={listenVerbs} size="sm">
          <FontAwesomeIcon icon={faMicrophone} />
        </ButtonIcon>
        {activity && (
          <div className=" bg-red px-3 rounded-xl">
            <span className="animate-pulse text-lightYellow">Speak</span>
          </div>
        )}
        <ButtonIcon onClick={checkVerbs} size="sm">
          <FontAwesomeIcon icon={faSpellCheck} />
        </ButtonIcon>
      </div>
      <VerbItem
        form="Infinitive"
        verb={enteredInfinitive}
        status={enteredInfinitiveStatus}
        highlight={activity && currentTense === "infinitive"}
        disabled={false}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredInfinitive(event.target.value);
        }}
      />
      <VerbItem
        form="Past"
        verb={enteredPastSimple}
        status={enteredPastSimpleStatus}
        highlight={activity && currentTense === "pastSimple"}
        disabled={true}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredPastSimple(event.target.value);
        }}
      />
      <VerbItem
        form="Past Participle"
        verb={enteredPastParticiple}
        status={enteredPastParticipleStatus}
        highlight={activity && currentTense === "pastParticiple"}
        disabled={true}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEnteredPastParticiple(event.target.value);
        }}
      />
    </div>
  );
};

export default LearnVerbListen;
