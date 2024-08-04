const PageContainer = ({ children }) => {
  return (
    <div className="py-6 sm:py-12 px-6 sm:px-12 max-w-screen-sm">
      {children}
    </div>
  );
};

export default PageContainer;
