import Nav from "./Nav";

const PageContainer = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100dvh)] p-2 gap-5">
      <Nav />
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default PageContainer;
