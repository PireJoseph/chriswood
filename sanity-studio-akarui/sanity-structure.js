import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
    "contact",
    "about"
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
      .title("A Propos")
      .child(
          S.editor()
              .id('about')
              .schemaType("about")
              .documentId("singleton-about")
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
      .title("Contact")
      .child(
          S.editor()
              .id('contact')
              .schemaType("contact")
              .documentId("singleton-contact")
      ),

        
    ]);