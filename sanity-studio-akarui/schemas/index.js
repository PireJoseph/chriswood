export default {
  name: 'index',
  title: 'Index',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sous-titre ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
