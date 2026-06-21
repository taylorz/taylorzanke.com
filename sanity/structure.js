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
      // Works grouped by tag, before Work
      S.listItem()
        .title('Works')
        .child(
          S.list()
            .title('Works')
            .items([
              S.listItem()
                .title('Exhibitions')
                .child(
                  S.documentList()
                    .title('Exhibitions')
                    .schemaType('works')
                    .filter('_type == "works" && "exhibitions" in tags')
                    .defaultOrdering([{field: 'year', direction: 'desc'}])
                    .initialValueTemplates([S.initialValueTemplateItem('works-exhibition')]),
                ),
              S.divider(),
              S.listItem()
                .title('Books')
                .child(
                  S.documentList()
                    .title('Books')
                    .schemaType('works')
                    .filter('_type == "works" && "books" in tags')
                    .defaultOrdering([{field: 'year', direction: 'desc'}])
                    .initialValueTemplates([S.initialValueTemplateItem('works-book')]),
                ),
            ]),
        ),
      S.listItem()
        .title('Individuals')
        .id('individuals')
        .child(S.document().schemaType('individuals').documentId('individuals')),
      // Include other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['biography', 'statement', 'resume', 'works', 'individuals', 'contact'].includes(listItem.getId()),
      ),
    ])
