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
      // Add a divider for other document types
      S.divider(),
      // Include other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['biography', 'statement', 'resume'].includes(listItem.getId()),
      ),
    ])
