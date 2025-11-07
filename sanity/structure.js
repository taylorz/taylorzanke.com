export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Resume singleton - only one document can exist
      S.listItem()
        .title('Resume')
        .id('resume')
        .child(
          S.document()
            .schemaType('resume')
            .documentId('resume')
        ),
      // Add a divider for other document types
      S.divider(),
      // Include other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['resume'].includes(listItem.getId())
      ),
    ])

