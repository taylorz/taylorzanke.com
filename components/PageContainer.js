import Nav from "@/components/Nav";

const PageContainer = ({ children }) => {
  return (
    <div className="w-full">
      <div className="px-6 sm:px-8 py-4">
        <Nav />
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
