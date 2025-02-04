const PageContainer = ({ children, pageContext }) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-[240px]">{pageContext}</div>
      <div className="flex flex-col gap-4 w-[640px]">{children}</div>
    </div>
  );
};

export default PageContainer;
