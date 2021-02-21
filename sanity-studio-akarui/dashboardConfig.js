require('dotenv').config({
  path: '../.env',
})

export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Website',
            apiId: `${process.env.NETLIFY_API_ID}`,
            buildHookId: `${process.env.NETLIFY_BUILD_HOOK_ID}`,
            name: 'build hook from sanity',
          },
        ],
      },
    },
  ],
}
