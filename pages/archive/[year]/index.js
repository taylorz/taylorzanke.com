import PageContainer from "@/components/PageContainer";

const YearPage = () => {
  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {works2.map((w, i) =>
              w.imageArray.map((img, i) => (
                <img
                  src={img.img}
                  className="w-full aspect-square object-contain"
                />
              ))
            )}
          </div>
        </div>
      }
    >
      <div>
        <img
          src={works2[5].imageArray[0].img}
          className="max-w-full max-h-[720px] object-contain object-center w-full"
        />
      </div>
      <div>
        <div>{works2[5].title}</div>
        <div>{works2[5].year}</div>
        <div>{works2[5].materials}</div>
        <div>{works2[5].dimensions}</div>
      </div>
    </PageContainer>
  );
};

export default YearPage;

const works2 = [
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/01/01-1.jpg", caption: "" },
      { img: "work/01/01-2.jpg", caption: "" },
      { img: "work/01/01-3.jpg", caption: "" },
    ],
  },
  {
    title: "OO",
    year: "2024",
    materials: "Pipe, wire, string, hardware, plastic",
    dimensions: "Dimensions variable",
    imageArray: [{ img: "work/02/02-1.jpg", caption: "" }],
  },
  {
    title: "Alcove",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/03/03-1.jpg", caption: "" },
      { img: "work/03/03-2.jpg", caption: "" },
      { img: "work/03/03-3.jpg", caption: "" },
    ],
  },
  {
    title: "Mirror",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/04/04-1.jpg", caption: "" },
      { img: "work/04/04-2.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/05/05-1.jpg", caption: "" },
      { img: "work/05/05-2.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/06/06-1.jpg", caption: "" },
      { img: "work/06/06-2.jpg", caption: "" },
      { img: "work/06/06-3.jpg", caption: "" },
      { img: "work/06/06-4.jpg", caption: "" },
    ],
  },
  {
    title: "The Source Can Be Transformed",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/07/07-1.jpg", caption: "" },
      { img: "work/07/07-2.jpg", caption: "" },
      { img: "work/07/07-3.jpg", caption: "" },
      { img: "work/07/07-4.jpg", caption: "" },
      { img: "work/07/07-5.jpg", caption: "" },
      { img: "work/07/07-6.jpg", caption: "" },
      { img: "work/07/07-7.jpg", caption: "" },
      { img: "work/07/07-8.jpg", caption: "" },
      { img: "work/07/07-9.jpg", caption: "" },
      { img: "work/07/07-10.jpg", caption: "" },
      { img: "work/07/07-11.jpg", caption: "" },
      { img: "work/07/07-12.jpg", caption: "" },
      { img: "work/07/07-13.jpg", caption: "" },
    ],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/08/08-1.jpg", caption: "" },
      { img: "work/08/08-2.jpg", caption: "" },
    ],
  },
  {
    title: "Indifferently Suspends A Third",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [{ img: "work/09/09-1.png", caption: "" }],
  },
  {
    title: "Untitled",
    year: "2024",
    materials: "Mixed media",
    dimensions: "Dimensions variable",
    imageArray: [
      { img: "work/10/10-1.jpg", caption: "" },
      { img: "work/10/10-2.webp", caption: "" },
    ],
  },
];
