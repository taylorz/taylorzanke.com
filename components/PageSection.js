const PageSection = ({ children, className, onClick }) => {
  return (
    <div
      className={`min-h-screen flex flex-col p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default PageSection;
