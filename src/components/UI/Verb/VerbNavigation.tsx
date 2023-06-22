import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerbType } from "../../../model/app.model";
import ButtonIcon from "../Button/ButtonIcon";
import VerbInfo from "./VerbInfo";

type VerbNavigationProps = {
  verb: VerbType;
  dictionaryUrl: string;
  onNext?: () => void;
  onPrevious?: () => void;
};

const VerbNavigation = ({ verb, dictionaryUrl, onNext, onPrevious }: VerbNavigationProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <ButtonIcon onClick={onNext}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonIcon>
      <VerbInfo verb={verb.infinitive} dictionaryUrl={dictionaryUrl} />
      <ButtonIcon onClick={onPrevious}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonIcon>
    </div>
  );
};

export default VerbNavigation;
