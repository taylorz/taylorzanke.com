import Nav from "@/components/Nav";

const PageContainer = ({ children }) => {
  return (
    <div className="w-full">
      <div className="px-8 py-4 grid grid-cols-2 sm:grid-cols-5 gap-8  pointer-events-none">
        <div className="flex flex-col gap-4 col-start-1 pointer-events-auto">
          <Nav />
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
