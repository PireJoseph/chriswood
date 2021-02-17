export default {
  name: 'about',
  title: 'About',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
