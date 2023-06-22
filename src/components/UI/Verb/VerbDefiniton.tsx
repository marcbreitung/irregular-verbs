import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

type VerbDefinitionProps = {
  form: "Infinitive" | "Past" | "Past Participle";
  status: "default" | "correct" | "wrong";
};

const statusConfig = {
  default: {
    className: "bg-blue rounded-xl basis-1/2 p-3 text-lightYellow",
    icon: null,
  },
  correct: {
    className: "bg-green rounded-xl basis-1/2 p-3 text-lightYellow flex justify-between items-center",
    icon: faCheckCircle,
  },
  wrong: {
    className: "bg-red rounded-xl basis-1/2 p-3 text-lightYellow flex justify-between items-center",
    icon: faCircleXmark,
  },
};

const VerbDefinition = ({ form, status }: VerbDefinitionProps) => {
  const config = statusConfig[status];

  if (!config) {
    return null;
  }

  const { className, icon } = config;

  return (
    <label htmlFor={form} className={className}>
      <span>{form}</span>
      {icon && <FontAwesomeIcon icon={icon} className="text-2xl" />}
    </label>
  );
};

export default VerbDefinition;
