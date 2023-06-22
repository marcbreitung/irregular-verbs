type TeaserGroupProps = {
  children: React.ReactNode;
};

const TeaserGroup = ({ children }: TeaserGroupProps) => {
  return <section className="grid grid-cols-2 gap-4">{children}</section>;
};

export default TeaserGroup;
