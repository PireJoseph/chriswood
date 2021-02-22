export default {
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Ordre',
      type: 'number',
      options: {
        required: true,
        integer: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'service',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'service' } }],
    },
    {
      name: 'completed',
      title: 'Achevé le',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  initialValue: () => ({
    completed: new Date().toISOString(),
  }),

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
