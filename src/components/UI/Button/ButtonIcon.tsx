type ButtonIconProps = {
  children?: React.ReactNode;
  size?: "sm" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeConfig = {
  sm: {
    className:
      "bg-red hover:bg-darkYellow rounded-md text-l p-2 text-lightYellow hover:text-blue h-[22px] flex justify-center items-center px-2 ease-out duration-300 w-[22px]",
  },
  lg: {
    className:
      "bg-red hover:bg-darkYellow rounded-md text-2xl text-lightYellow hover:text-blue h-[44px] flex justify-center items-center px-2 ease-out duration-300 w-[44px]",
  },
};

const ButtonIcon = ({ children, size = "lg", ...props }: ButtonIconProps) => {
  const config = sizeConfig[size];

  return (
    <button className={config.className} {...props}>
      {children}
    </button>
  );
};

export default ButtonIcon;
