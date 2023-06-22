import ButtonText from "../Button/ButtonText";

export type OptionType = "show" | "listen" | "write";

type VerbOptionsProps = {
  option: OptionType;
  onChangeOption: (option: OptionType) => void;
};

const VerbOptions = ({ option, onChangeOption }: VerbOptionsProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <ButtonText onClick={() => onChangeOption("show")} layout={option === "show" ? "primary" : "secondary"}>
          Show
        </ButtonText>
      </div>
      <div className="mt-2">
        <ButtonText onClick={() => onChangeOption("listen")} layout={option === "listen" ? "primary" : "secondary"}>
          Listen
        </ButtonText>
      </div>
      <div className="mt-2">
        <ButtonText onClick={() => onChangeOption("write")} layout={option === "write" ? "primary" : "secondary"}>
          Write
        </ButtonText>
      </div>
    </div>
  );
};

export default VerbOptions;
