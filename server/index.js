import express from 'express'
import { Nuxt, Builder } from 'nuxt'
var bodyParser = require('body-parser');

import api from './api'

import Config from './config'

let globalConfig = Config.globalConfig

let baseApi = globalConfig.app.routerBaseApi

let baseUrl = `http://${globalConfig.app.host}:${globalConfig.app.port}`

if(process.env.NODE_ENV === 'production') {
  baseUrl = globalConfig.production.domain
}

const app = express()
const host = process.env.HOST || '192.168.1.95'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/'+baseApi, api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
