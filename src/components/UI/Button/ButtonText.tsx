type ButtonTextProps = {
  layout: "primary" | "secondary";
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const layoutConfig = {
  primary: {
    className:
      "bg-red hover:bg-darkYellow rounded-md text-lg text-lightYellow hover:text-blue h-[44px] flex justify-center items-center px-4 ease-out duration-300 w-full",
  },
  secondary: {
    className:
      "bg-lightYellow hover:bg-darkYellow rounded-md text-lg text-blue hover:text-blue h-[44px] flex justify-center items-center px-4 ease-out duration-300 w-full",
  },
};

const ButtonText = ({ children, layout, ...props }: ButtonTextProps) => {
  const config = layoutConfig[layout];

  if (!config) {
    return null;
  }

  const { className } = config;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default ButtonText;
