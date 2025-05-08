import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";

const Information = () => {
  return (
    <PageContainer>
      <div className="pt-10 pl-[116px]">
        <MaxWidth>
          <div className="flex flex-col gap-10">
            {/* Info */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="italic">Studio</p>
                <p>Studio 5, Third Floor</p>
                <p>1500 S Los Angeles Street</p>
                <p>Los Angeles, California 90015</p>
                <p>United States</p>
              </div>
              <div>
                <p className="italic">Contact</p>
                <p>
                  <a href="">taylor@allowingmanyforms.org</a>
                </p>
                <p>+1 917 826 7277</p>
              </div>
              <div>
                <p className="italic">Download</p>
                <p>
                  <a href="">Curriculum Vitae</a>
                </p>
              </div>
            </div>
            {/* Statement */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Artist Statement, 2023 — Present</h1>

              <p>
                My art making begins in flickers of awareness and attachment to
                the spaces and material I encounter. I think about the wake my
                presence and touch leaves behind in constellations of objects
                and structures and their gradual return to stillness. I draw
                material from these encounters to form a growing collection that
                is slowly filling up a room. This room and its contents form an
                ongoing self portrait wherein I develop my understanding of
                relationships between space, language, self, and time.
              </p>
              <p>
                I engage in a practice of looking, arranging, and waiting
                through which I become attuned to the identity of the materials
                I collect. This process develops my sense that each object
                exists at once in itself, and in each other object too.
              </p>
              <p>
                As I have continued to work with this collection I have come to
                understand both the architecture of the room and its contents as
                a single composition, within which one and several works exist
                simultaneously. As material builds up, sedimenting layers of
                closeness and association give rise to sculptural and site
                specific works. These works remain for a time as they are
                gradually absorbed back into the collection and made into yet
                more works. The ephemerality of my materials - paper, packaging,
                discarded furniture, building material - reference the
                transitory and incidental contact between self and constructed
                world. I work with degrees of fixity and entropy to question the
                solidity of both art and non art objects to entertain the
                possibility of transformation and awakening.
              </p>
            </div>
            {/* Practice */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Practice</h1>
              <p>Currently I'm working on...</p>
              <p>I started with...</p>
              <p>In the future I will...</p>
            </div>
            {/* Kinne */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">William Kinne Prize</h1>
              <p>
                I wrote a winning proposal for a form of unconventional
                architecture practice entitled{" "}
                <q>
                  A Building Depository: New Temporal Accumulation of Subject
                  Matter, Material and Memory
                </q>{" "}
                upon completing my M.Arch and M.S. at Columbia University GSAPP
                in May 2018. In some ways, I consider my current practice to be
                a step toward the enacting of this proposal. (
                <a href="/kinne.pdf">Read it here</a>).
              </p>
            </div>
            {/* Allowing Many Forms */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Allowing Many Forms</h1>
              <p>In 2022 I founded a ...</p>
            </div>
            {/* Last Updated */}
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">Newsletter</h1>

              <NewsletterSubscribe />
            </div>
            {/* Last Updated */}
            <div className="flex flex-col gap-5">
              <p>Last updated May 7, 2025</p>
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default Information;
