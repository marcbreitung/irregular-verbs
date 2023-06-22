import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type TeaserProps = {
  title: string;
  icon: IconProp;
  link: string;
};

const Teaser = ({ title, icon, link }: TeaserProps) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center justify-center bg-gradient-to-r from-green to-darkGreen rounded-xl p-4"
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-lightYellow" />
      <h3 className="text-lightYellow mt-3">{title}</h3>
    </Link>
  );
};

export default Teaser;
