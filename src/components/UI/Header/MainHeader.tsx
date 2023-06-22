import { faSliders } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../Button/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type MainHeaderProps = {
  title: string;
  onSettingsClick: () => void;
};

const MainHeader = ({ title, onSettingsClick }: MainHeaderProps) => {
  return (
    <header className="grid grid-cols-4 gap-4 mb-4">
      <div className="bg-red col-span-3 row-span-1 flex items-center px-6 py-4 rounded-br-3xl -mt-4 -ml-4">
        <Link to="/">
          <h1 className="text-lightYellow text-xl">{title}</h1>
        </Link>
      </div>
      <div className="col-span-1 justify-self-end">
        <ButtonIcon onClick={onSettingsClick}>
          <FontAwesomeIcon icon={faSliders} />
        </ButtonIcon>
      </div>
    </header>
  );
};

export default MainHeader;
