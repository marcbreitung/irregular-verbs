import { faSliders } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../Button/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IntroHeaderProps = {
  title: string;
  onSettingsClick: () => void;
};

const IntroHeader = ({ title, onSettingsClick }: IntroHeaderProps) => {
  return (
    <header className="flex justify-between">
      <div className="h-[390px]">
        <h1 className="text-lightYellow text-xl h-full z-20 flex items-center">
          <div className="rounded-3xl bg-gradient-to-r from-darkYellow to-red w-[343px] h-[343px] mx-h-[50vh] mx-w-[50vh] rotate-45 -translate-x-[40%] absolute top-0 z-10"></div>
          <span className="text-5xl relative z-20 w-1/2 -mt-16">{title}</span>
        </h1>
      </div>
      <div className="">
        <ButtonIcon onClick={onSettingsClick}>
          <FontAwesomeIcon icon={faSliders} />
        </ButtonIcon>
      </div>
    </header>
  );
};

export default IntroHeader;
