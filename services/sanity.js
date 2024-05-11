import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.EXPO_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-05-02', // use a UTC date string
  useCdn: true, // Use the cached version (optional)
});

export const urlFor = (source) => ImageUrlBuilder(client).image(source);

export default client;
