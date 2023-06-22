type AppPageProps = {
  children: React.ReactNode;
};

const AppPage = ({ children }: AppPageProps) => {
  return (
    <section className="bg-gradient-to-b from-darkGreen to-lightBlue min-h-screen min-w-full overflow-hidden p-4 flex flex-col justify-between">
      {children}
    </section>
  );
};

export default AppPage;
