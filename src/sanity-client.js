import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '3l3i2q7j',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-12', // use current date (YYYY-MM-DD) to target the latest API version
})