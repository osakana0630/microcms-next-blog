/* eslint-disable */
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'learning',
  apiKey: process.env.API_KEY,
})
