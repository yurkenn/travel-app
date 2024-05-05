import client from './sanity';

export const getAllPosts = async () => {
  const query = '*[_type == "post"] | order(publishedAt desc)';
  const posts = await client.fetch(query);
  console.log(posts);
  return posts;
};
