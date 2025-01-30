const PageContainer = ({ children, pageContext }) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-[360px]">{pageContext}</div>
      <div className="flex flex-col gap-4 w-[720px]">{children}</div>
    </div>
  );
};

export default PageContainer;
