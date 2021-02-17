export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Nom ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Téléphone ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vat',
      title: 'Numéro de tva ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'adress_street',
      title: 'Adresse [Rue, numéro]',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'adress_city',
      title: 'Adresse [Codepostal Localité]',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'facebook_adress',
      title: 'Facebook adress',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'facebook_title',
      title: 'Facebook title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
