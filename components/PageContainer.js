const PageContainer = ({ children }) => {
  return (
    <div className="py-4 sm:py-12 px-4 sm:px-12 max-w-screen-sm">
      {children}
    </div>
  );
};

export default PageContainer;
