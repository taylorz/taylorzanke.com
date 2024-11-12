import PageContainer from "../components/PageContainer";

export default function Information() {
  return (
    <PageContainer>
      <div className="w-full flex justify-between">
        <p className="font-bold">Taylor Zanke</p>
        <div>
          <a href="/" className="hover:underline">
            Close
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-7 sm:gap-9">
        <p>
          Taylor is a visual artist. His sculptural works are made from found
          materials including furniture, paper, building debris, plastic bags,
          and string. He challenges the notion of the fixed artwork and engages
          with objects and spaces in their unfolding. The work appears in a
          reciprocal relationship with photography, drawing, and the making of
          artists books, where images allow reinhabitation and reverberation.
        </p>
        <p>
          Zanke founded and directs Allowing Many Forms, a publisher of artists
          books, through which he releases books of his own work including{" "}
          <em>The Source Can Be Transformed</em> (2024), <em>Two Visits</em>{" "}
          (2019), and <em>Honolulu New York</em> (2013). He has presented these
          and other volumes at book fairs including the San Francisco Art Book
          Fair and Acid-Free Los Angeles Book Market (2024). His work has been
          featured in duo and group exhibitions at Ruth Gallery in Pasadena
          (2023, 2024). He presented the site specific work{" "}
          <em>I Know Some Things Form Without You</em> (2023) at Tryst, Torrence
          Art Museum.
        </p>
        <p>
          He graduated with a B.F.A. from Parsons The New School For Design and
          earned a M.Arch and M.S. from Columbia University.
        </p>
        <div>
          <p className="font-bold">Contact</p>
          <p>taylor@allowingmanyforms.org</p>
          <p>Studio in Los Angeles, California</p>
        </div>
        <div>
          <p className="font-bold">Publishing</p>
          <a href="https://www.allowingmanyforms.org/" target="_blank">
            allowingmanyforms.org
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
