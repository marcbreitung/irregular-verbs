import VerbDefinition from "./VerbDefiniton";
import VerbField from "./VerbField";

export type FormType = "Infinitive" | "Past" | "Past Participle";
export type StatusType = "default" | "correct" | "wrong";

type VerbItemProps = {
  form: FormType;
  status: StatusType;
  highlight?: boolean;
  disabled?: boolean;
  verb: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const highlightConfig = {
  default: {
    className: "my-6 flex bg-lightBlue rounded-xl overflow-hidden border-2 border-transparent",
  },
  hightlight: {
    className: "my-6 flex bg-lightBlue rounded-xl overflow-hidden border-2 border-red",
  },
};

const VerbItem = ({ form, status = "default", highlight, disabled, verb, onChange }: VerbItemProps) => {
  const config = highlight ? highlightConfig.hightlight : highlightConfig.default;

  return (
    <div className={config.className}>
      <VerbDefinition form={form} status={status} />
      <VerbField verb={verb} id={form} name={form} onChange={onChange} disabled={disabled} />
    </div>
  );
};

export default VerbItem;
