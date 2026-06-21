import PageContainer from "@/components/PageContainer";
import WorkItem from "@/components/WorkItem";

const WorkList = ({ items, basePath }) => {
  return (
    <PageContainer>
      <div className="px-6 sm:px-8 grid grid-cols-5 gap-8">
        <div className="col-start-1 col-span-5">
          {items.map((item, i) => (
            <WorkItem key={i} work={item} basePath={basePath} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default WorkList;
