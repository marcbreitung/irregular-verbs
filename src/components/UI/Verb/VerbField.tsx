type VerbFieldProps = {
  verb: string;
  id: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const VerbField = ({ verb, id, name, ...props }: VerbFieldProps) => {
  return (
    <div className="bg-gradient-to-r from-lightBlue to-blue basis-1/2 p-2 text-lightYellow rounded-xl">
      <input
        type="text"
        id={id}
        name={name}
        value={verb}
        className="w-full bg-transparent border-none outline-yellow outline-1 p-1"
        {...props}
      />
    </div>
  );
};

export default VerbField;
