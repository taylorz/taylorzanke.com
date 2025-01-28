import PageContainer from "../components/PageContainer";

const ResumeItem = ({ year, caption, location, showYear }) => {
  return (
    <div className="flex flex-row">
      <div className="w-[48px]">{showYear ? year : ""}</div>
      <div className="w-full">
        {caption}, {location}
      </div>
    </div>
  );
};

export default function Information() {
  return (
    <PageContainer
      pageContext={
        <div className="flex flex-col gap-4 pt-8">
          <div>Biography (PDF)</div>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>EDUCATION</div>
        <div className="flex flex-col">
          {EDUCATION.map((e, i) => (
            <ResumeItem
              year={e.year}
              caption={e.caption}
              location={e.location}
              showYear={i === 0 || EDUCATION[i - 1].year !== e.year}
              key={i}
            />
          ))}
        </div>
        <div>GROUP AND DUO EXHIBITIONS</div>
        <div className="flex flex-col">
          {EXHIBITIONS.map((e, i) => (
            <ResumeItem
              year={e.year}
              caption={e.caption}
              location={e.location}
              showYear={i === 0 || EXHIBITIONS[i - 1].year !== e.year}
              key={i}
            />
          ))}
        </div>
        <div>PUBLICATIONS</div>
        <div className="flex flex-col">
          {PUBLICATIONS.map((e, i) => (
            <ResumeItem
              year={e.year}
              caption={e.caption}
              location={e.location}
              showYear={i === 0 || PUBLICATIONS[i - 1].year !== e.year}
              key={i}
            />
          ))}
        </div>
        <div>PRESENTATIONS</div>
        <div className="flex flex-col">
          {PRESENTATIONS.map((e, i) => (
            <ResumeItem
              year={e.year}
              caption={e.caption}
              location={e.location}
              showYear={i === 0 || PRESENTATIONS[i - 1].year !== e.year}
              key={i}
            />
          ))}
        </div>
        <div>AWARDS</div>
        <div className="flex flex-col">
          {AWARDS.map((e, i) => (
            <ResumeItem
              year={e.year}
              caption={e.caption}
              location={e.location}
              showYear={i === 0 || AWARDS[i - 1].year !== e.year}
              key={i}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

const EDUCATION = [
  {
    year: "2018",
    caption: "MArch, MS, Columbia University",
    location: "New York NY",
  },
  {
    year: "2014",
    caption: "BFA, Parsons The New School for Design",
    location: "New York NY",
  },
];
const EXHIBITIONS = [
  {
    year: "2024",
    caption: "Troubled Kinships, Scotty",
    location: "Berlin, Germany",
  },
  {
    year: "2024",
    caption: "A Matter Of Space (Duo with Alicia Cheatham), Ruth Gallery",
    location: "Los Angeles CA",
  },
  {
    year: "2023",
    caption: "Leaf Thru Pore Over, Ruth Gallery",
    location: "Los Angeles CA",
  },
];
const PUBLICATIONS = [
  {
    year: "2024",
    caption: "The Source Can Be Transformed, AMF",
    location: "Los Angeles CA",
  },
  {
    year: "2023",
    caption: "The Halves And Half Nots (with Cody Miner), AMF",
    location: "Los Angeles CA",
  },
  {
    year: "2021",
    caption: "Figures (with Matthew Ransom), Figure Press",
    location: "New York NY",
  },
  {
    year: "2019",
    caption: "Two Visits, AMF",
    location: "Los Angeles CA",
  },
  {
    year: "2013",
    caption: "Honolulu New York, AMF",
    location: "New York NY",
  },
  {
    year: "2013",
    caption: "Currents: Translations, Synoptic Office",
    location: "New York NY",
  },
];

const PRESENTATIONS = [
  {
    year: "2024",
    caption: "Acid-Free Art Book Market, AMF",
    location: "Los Angeles CA",
  },
  {
    year: "2024",
    caption: "San Francisco Art Book Fair, AMF",
    location: "San Francisco CA",
  },
  {
    year: "2024",
    caption: "Off-Register Santa Barbara, AMF",
    location: "Santa Barbara CA",
  },
  {
    year: "2024",
    caption: "Print Pomona Art Book Fair, AMF",
    location: "Pomona CA",
  },
  {
    year: "2023",
    caption: "Torrance Art Museum (TRYST)",
    location: "Torrance CA",
  },
  {
    year: "2023",
    caption: "Book Viewing (Hosted by Tomorrow Today)",
    location: "Los Angeles CA",
  },
  {
    year: "2022",
    caption: "Book Viewing (Hosted by Only If Architecture)",
    location: "New York NY",
  },
];

const AWARDS = [
  {
    year: "2018",
    caption:
      "William Kinne Fellowship, for 'A Building Depository: New Temporal Accumulations Of Subject Matter, Material, and Memory', Columbia University",
    location: "New York NY",
  },
];
