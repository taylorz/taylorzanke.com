export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Biography singleton - only one document can exist
      S.listItem()
        .title('Biography')
        .id('biography')
        .child(S.document().schemaType('biography').documentId('biography')),
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
      // Work: everything, then one list per tag doc
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
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
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
            ]),
        ),
      S.listItem()
        .title('Tags')
        .child(
          S.documentTypeList('tag')
            .title('Tags')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
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
      // Include any other document types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'biography',
            'statement',
            'resume',
            'works',
            'individuals',
            'contact',
            'tag',
          ].includes(listItem.getId()),
      ),
    ])
