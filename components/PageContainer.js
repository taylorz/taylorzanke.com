const PageContainer = ({ children, pageContext }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-4 w-[320px]">{pageContext}</div>
      <div className="flex flex-col gap-4 w-[640px]">{children}</div>
    </div>
  );
};

export default PageContainer;
