import { ChangeEvent, useContext, useState } from "react";
import { VerbType } from "../../model/app.model";
import VerbItem from "../UI/Verb/VerbItem";
import ButtonIcon from "../UI/Button/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { read } from "../../utils/learning.utils";
import { SettingsContext } from "../../store/settings-context";

type LearnVerbShowProps = {
  verb: VerbType;
};

const LearnVerbShow = ({ verb }: LearnVerbShowProps) => {
  const { voice, volume } = useContext(SettingsContext);
  const [readInfinitive, setReadInfinitive] = useState(false);
  const [readPastSimple, setReadPastSimple] = useState(false);
  const [readPastParticiple, setReadPastParticiple] = useState(false);

  const resetReadStatus = () => {
    setReadInfinitive(false);
    setReadPastSimple(false);
    setReadPastParticiple(false);
  };

  const readVerbs = () => {
    (async () => {
      if (!voice) return;
      resetReadStatus();
      setReadInfinitive(true);
      await read(verb.infinitive, voice, volume);
      resetReadStatus();
      setReadPastSimple(true);
      await read(verb.pastSimple, voice, volume);
      resetReadStatus();
      setReadPastParticiple(true);
      await read(verb.pastParticiple, voice, volume);
      resetReadStatus();
    })();
  };

  return (
    <div className="my-6">
      <ButtonIcon onClick={readVerbs} size="sm">
        <FontAwesomeIcon icon={faVolumeHigh} />
      </ButtonIcon>
      <VerbItem
        form="Infinitive"
        verb={verb.infinitive}
        status="default"
        highlight={readInfinitive}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {}}
      />
      <VerbItem
        form="Past"
        verb={verb.pastSimple}
        status="default"
        highlight={readPastSimple}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {}}
      />
      <VerbItem
        form="Past Participle"
        verb={verb.pastParticiple}
        status="default"
        highlight={readPastParticiple}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {}}
      />
    </div>
  );
};

export default LearnVerbShow;
