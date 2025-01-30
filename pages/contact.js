import PageContainer from "@/components/PageContainer";

const Contact = () => {
  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4">
          <div>STUDIO</div>
          <div>
            <div>In downtown Los Angeles CA</div>
            <div>taylor.zanke@gmail.com</div>
          </div>
        </div>
      }
    ></PageContainer>
  );
};

export default Contact;
