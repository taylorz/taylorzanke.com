export default (S, context) =>
  S.list()
    .title('Content')
    .items([
      // Statement singleton - only one document can exist
      S.listItem()
        .title('Statement')
        .id('statement')
        .child(S.document().schemaType('statement').documentId('statement')),
      // Resume singleton - only one document can exist
      S.listItem()
        .title('Resume')
        .id('resume')
        .child(S.document().schemaType('resume').documentId('resume')),
      // Contact singleton - only one document can exist
      S.listItem()
        .title('Contact')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact')),
      // Add a divider for other document types
      S.divider(),
      // Work: everything, then one list per tag doc, and one per year
      S.listItem()
        .title('Work')
        .child(
          S.list()
            .title('Work')
            .items([
              S.listItem()
                .title('All')
                .child(
                  S.documentTypeList('works')
                    .title('All work')
                    .defaultOrdering([{field: 'year', direction: 'desc'}]),
                ),
              S.divider(),
              S.listItem()
                .title('By tag')
                .child(
                  S.documentTypeList('tag')
                    .title('By tag')
                    .defaultOrdering([{field: 'title', direction: 'asc'}])
                    .child((tagId) =>
                      S.documentList()
                        .title('Work')
                        .schemaType('works')
                        .filter('_type == "works" && references($tagId)')
                        .params({tagId})
                        .defaultOrdering([{field: 'year', direction: 'desc'}])
                        .initialValueTemplates([
                          S.initialValueTemplateItem('works-by-tag', {tagId}),
                        ]),
                    ),
                ),
              // One list per year that has work, newest first. The years are
              // fetched when "By year" is opened.
              S.listItem()
                .title('By year')
                .child(async () => {
                  const allYears = await context
                    .getClient({apiVersion: '2024-04-07'})
                    .fetch('*[_type == "works" && defined(year)].year')
                  const years = [...new Set(allYears)].sort().reverse()
                  return S.list()
                    .title('By year')
                    .items(
                      years.map((year) =>
                        S.listItem()
                          .id(year)
                          .title(year)
                          .child(
                            S.documentList()
                              .title(year)
                              .schemaType('works')
                              .filter('_type == "works" && year == $year')
                              .params({year})
                              .defaultOrdering([{field: 'title', direction: 'asc'}])
                              .initialValueTemplates([
                                S.initialValueTemplateItem('works-by-year', {year}),
                              ]),
                          ),
                      ),
                    )
                }),
            ]),
        ),
      S.listItem()
        .title('Tags')
        .child(
          S.documentTypeList('tag')
            .title('Tags')
            .defaultOrdering([{field: 'title', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Individuals')
        .id('individuals')
        .child(S.document().schemaType('individuals').documentId('individuals')),
      // Home singleton - homepage carousel (1–5 slides)
      S.listItem()
        .title('Home')
        .id('home')
        .child(S.document().schemaType('home').documentId('home')),
      // About singleton - biography on the About page
      S.listItem()
        .title('About')
        .id('about')
        .child(S.document().schemaType('about').documentId('about')),
      // Include any other document types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'about',
            'statement',
            'resume',
            'works',
            'individuals',
            'contact',
            'tag',
          ].includes(listItem.getId()),
      ),
    ])
