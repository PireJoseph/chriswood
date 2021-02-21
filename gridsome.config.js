require('dotenv').config({
  path: '.env',
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Chris Wood',
  siteDescription:
    'Site de Christopher Crepin, Placards sur mesure, Cuisines, Dressings, Escaliers, Salles de bains, Parquets, Chassis de vois, pvc, alu, Terrasses, bardages',
  siteUrl: 'https://kind-haibt-874db9.netlify.app',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Chris Wood',
        shortName: 'Chris Wood',
        description:
          'Site de Christopher Crepin, Placards sur mesure, Cuisines, Dressings, Escaliers, Salles de bains, Parquets, Chassis de vois, pvc, alu, Terrasses, bardages',
        categories: 'construction, menuiserie, rénovation, bois',
        lang: 'fr-BE',
      },
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {},
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
        goesBothWays: true,
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: [
            'svg-inline--fa',
            'table',
            'table-striped',
            'table-bordered',
            'table-hover',
            'table-sm',
          ],
          whitelistPatterns: [
            /fa-$/,
            /blockquote$/,
            /code$/,
            /pre$/,
            /table$/,
            /table-$/,
            /dark*/,
          ],
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: false,
        shouldTimeTravel: false,
        shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: `${process.env.SANITY_PROJECT_ID}`,
        dataset: `${process.env.SANITY_DATASET}`,
        // comment out or delete the line below if you are not using a token
        token: `${process.env.SANITY_TOKEN}`,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        cache: false,
        typeName: 'SanityImageAsset',
        schemaType: 'Image',
        sourceField: 'url',
        targetField: 'localFile',
        targetPath: 'src/assets/sanity/images',
      },
    },
  ],
}
