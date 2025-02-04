import PageContainer from "@/components/PageContainer";

const Exhibitions = () => {
  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col">
          <div>A Matter Of Space</div>
          <div>A Matter Of Space</div>
          <div>Leaf Thru Pore Over</div>
        </div>
      }
    >
      <div>Exhibitions</div>
    </PageContainer>
  );
};

export default Exhibitions;
