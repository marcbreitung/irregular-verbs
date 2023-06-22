import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../UI/Button/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DrawerProps = {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
};

const Drawer = ({ children, title, open = false, onClose }: DrawerProps) => {
  const isOpen = open ? "translateX(calc(40px))" : "translateX(-100%)";

  return (
    <>
      {open && <div className="fixed top-0 left-0 bg-blue opacity-50 h-screen w-screen" onClick={onClose}></div>}
      <div className="fixed w-screen bg-lightBlue h-screen z-30 top-0 left-0 right-0" style={{ transform: isOpen }}>
        <div className="overflow-hidden mr-[40px] p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lightYellow">{title}</h2>
            <ButtonIcon onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </ButtonIcon>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
