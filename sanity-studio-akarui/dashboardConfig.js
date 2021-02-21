export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Gestion des déploiements',
        sites: [
          {
            title: 'Site web',
            apiId: process.env.NETLIFY_API_ID,
            buildHookId: process.env.NETLIFY_BUILD_HOOK_ID,
            name: 'kind-haibt-874db9',
          },
        ],
      },
    },
  ],
}
