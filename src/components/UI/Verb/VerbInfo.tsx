import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type VerbInfoProps = {
  verb: string;
  dictionaryUrl: string;
};

const VerbInfo = ({ verb, dictionaryUrl }: VerbInfoProps) => {
  return (
    <div>
      <a
        href={`${dictionaryUrl}/${verb}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
        title="Open link to dictionary"
      >
        <span className="text-lightYellow">{verb}</span>
        <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-lightYellow" />
      </a>
    </div>
  );
};

export default VerbInfo;
