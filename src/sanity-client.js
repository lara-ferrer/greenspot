import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '3l3i2q7j',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-12', // use current date (YYYY-MM-DD) to target the latest API version
})

export const writeClient = createClient({
  projectId: '3l3i2q7j',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skaDhSjZa64X3PaBYOAAiQsMfFTsGB6MJznu1kpzAzEFl9EAwOhOCYVmetBItcJwxnMMLbLvLooKXmwtWA5b1ZgpGy5gKMsfBHzAJAGrxjuneYqUH3h90pihtVxwm7yR61nAfAAoazuF1LJbPputFM7ebTJpT59FtfTr9G68ohWj8Wc5P4Sk'
})