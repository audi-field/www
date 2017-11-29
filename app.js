require ('dotenv').config({ silent: true })

const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const SpikeDatoCMS = require('spike-datocms')
const locals = {}
const env = process.env.SPIKE_ENV

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    parser: sugarml,
    root: './views',
    locals: (ctx) => { return Object.assign(locals, { pageId: pageId(ctx)} )},
    minify: env === 'production'
  }),
  postcss: cssStandards({
    parser: sugarss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  server: { open: false },
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: process.env.DATO_READ_TOKEN,
      models: [
        {
          name: 'index',
          json: 'index.json'
        },
        {
          name: 'fan_exp',
          json: 'fan-exp.json'
        },
        {
          name: 'stadium',
          json: 'stadium.json'
        },
        {
          name: 'media_new',
        },
        {
          name: 'press_release',
          template: {
            path: 'views/pr-template.sgr',
            output: (pr) => { return `press-release/${pr.slug}.html`}
          }
        },
        {
          name: 'join'
        },
        {
          name: 'about'
        },
        {
          name: 'footer' 
        },
        {
          name: 'premium_seating_qa'
        },
        {
          name: 'preview_center_qa'
        },
        {
          name: 'suites_qa'
        },
        {
          name: 'supporter_qa'
        },
        {
          name: 'transportation_qa'
        },
        {
          name: 'social_account'
        },
        {
          name: 'photo_gallery',
          template: {
            path: 'views/gallery-template.sgr',
            output: (gallery) => { return `galleries/${gallery.slug}.html`}
          }
        },
        {
          name: 'seat',
          template: {
            path: 'views/seating-template.sgr',
            output: (seat) => { return `seating/${seat.slug}.html`}
          }
        }
      ],
      json: 'data.json'
    })
  ]
}
