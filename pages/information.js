import PageContainer from "@/components/PageContainer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import MaxWidth from "@/components/MaxWidth";

const Information = () => {
  return (
    <PageContainer>
      <div className="pt-10 pl-0 sm:pl-[116px]">
        <MaxWidth>
          <div className="flex flex-col gap-5">
            {/* Info */}
            <div className="flex flex-col gap-5">
              <ul>
                <li className="italic">Contact</li>
                <li>Los Angeles, California</li>
                <li>
                  <a href="mailto:taylor@allowingmanyforms.org">
                    taylor@allowingmanyforms.org
                  </a>
                </li>
              </ul>
              <ul>
                <li className="italic">Publishing</li>
                <li>
                  <a href="https://allowingmanyforms.org" target="_blank">
                    allowingmanyforms.org
                  </a>
                </li>
              </ul>

              <ul>
                <li className="italic">Download</li>
                <li>
                  <a href="/downloads/taylor-zanke-cv-2025.pdf" target="_blank">
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/taylor-zanke-statement-2025.pdf"
                    target="_blank"
                  >
                    Statement
                  </a>
                </li>
              </ul>
            </div>
            {/* Statement */}
            {/* <div className="flex flex-col gap-5">
              <h1 className="font-bold">Artist Statement, 2024 — Present</h1>

              <p>
                My art making begins in flickers of awareness and attachment to
                the spaces and material I encounter. I think about the wake my
                presence leaves behind in constellations of objects and
                structures, and their gradual return to stillness. I draw
                material from these encounters into a growing collection that is
                slowly filling up a room. This room and its contents travel with
                me, as a psychological site, wherein I develop my understanding
                of relationships between memory, space, self, and time.
              </p>
              <p>
                I engage in a practice of looking, arranging, and waiting
                through which I become attuned to the simple reality of the
                materials I collect. This process helps me to let the forces in
                a situation act through me as if I were a medium, and to form
                new rooms out of the conditions I find in front of me.
              </p>
              <p>
                I have come to understand both the architecture of a room and
                its contents as a single composition, within which one and
                several works exist simultaneously. As material builds up,
                sedimenting layers of association give rise to sculptural and
                site specific works. The ephemerality of my materials - paper,
                packaging, discarded furniture, building material - reference
                the transitory contact between self and constructed world. I
                work with degrees of fixity and disorder to question the
                solidity of both art and non art objects to entertain the
                possibility of transformation and awakening.
              </p>
            </div> */}
            {/* Practice */}
            {/* <div className="flex flex-col gap-5">
              <h1 className="font-bold">Practice</h1>
              <p>
                As I work today, I have noticed the edges of work and raw
                material to be increasingly ambiguous in what is present. The
                seeking edge of my practice feels most tangible in the arising
                conditions between untethered substance and tenuously attached
                material. I sense a kind of oscillation there which pulls one
                toward the other. The visibly incidental stirs a question about
                that which seems determined - and the inverse seems true to me
                too. I can observe new artists books and sculptures appearing
                out of these conditions. I can imagine an installation of these
                materials which I would continue to work on throughout the
                duration of its being shown.
              </p>
              <p>
                I think often about an unrealized work which is sited in an old,
                abandoned house, somewhere in the countryside. The house would
                be both the material used to make sculptures and the location in
                which they are made. The sculptures would engage the
                architecture of the house, and bring that architecture to
                locations of display through their form and spirit. Slowly, the
                house would become smaller and smaller, until a final
                site-specific work would reveal itself from the remains.
              </p>
            </div> */}
            {/* Kinne */}
            {/* <div className="flex flex-col gap-5">
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
                <a
                  href="/downloads/taylor-zanke-kinne-2018.pdf"
                  target="_blank"
                >
                  Read it here
                </a>
                ).
              </p>
            </div> */}
            {/* Allowing Many Forms */}
            {/* <div className="flex flex-col gap-5">
              <h1 className="font-bold">Allowing Many Forms</h1>
              <p>
                In 2022 I began working with other artists to create unique
                books using my collection of paper, book making tools, and
                binding expertise. Initially, these books were all piece uniques
                that were made in very close dialog with the ongoing questions
                and practice of each individual I collaborated with. Lately,
                I've ventured into the world of commercial printing to realize a
                number of books showing specific bodies of work produced
                together with artists, or from their practices. The project has
                become a venue for me to collaborate with other artists or
                organizations and see how the ways of working I am developing in
                my art making might engage with other structures and modes. (
                <a href="https://allowingmanyforms.org" target="_blank">
                  allowingmanyforms.org
                </a>
                ).
              </p>
            </div> */}

            <div className="flex flex-col">
              <h1 className="italic">Newsletter</h1>
              <NewsletterSubscribe />
            </div>

            {/* Last Updated */}
            <div className="flex flex-col gap-5">
              <p>Last updated September 22, 2025</p>
            </div>
          </div>
        </MaxWidth>
      </div>
    </PageContainer>
  );
};

export default Information;
