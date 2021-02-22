require('dotenv').config({
  path: '.env',
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Chris Wood',
  siteDescription:
    'Site de Christopher Crepin, Placards sur mesure, Cuisines, Dressings, Escaliers, Salles de bains, Parquets, Chassis de vois, pvc, alu, Terrasses, bardages',
  siteUrl: 'https://kind-haibt-874db9.netlify.app',
  icon: './favicon.svg',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'Chris Wood',
        shortName: 'Chris Wood',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: './favicon.svg',
        description:
          'Site de Christopher Crepin, Placards sur mesure, Cuisines, Dressings, Escaliers, Salles de bains, Parquets, Chassis de vois, pvc, alu, Terrasses, bardages',
        categories: 'construction, menuiserie, rénovation, bois',
        maskableIcon: true,
        dir: 'auto',
        lang: 'fr-BE',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          routes: ['/', '/services', '/projets', 'contact'],
          fileTypes: ['document', 'script', 'style', 'image'],
        },
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
