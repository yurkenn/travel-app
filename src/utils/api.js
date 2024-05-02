import client from '~/sanity';

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]{
  _id,
    title,
    slug,
    description,
    date,
    publishedAt,
  "imageURL" : mainImage.asset->url,
    categories[0]->{
      title,
      slug
    },
    body,
    location,
  }`);
  console.log(results);
  return results;
}

export async function getPostBySlug(slug) {
  const results = await client.fetch(`*[_type == "post" && slug.current == $slug]`, { slug });
  console.log(results);
  return results;
}

export async function getCategories() {
  const results = await client.fetch(`*[_type == "category"]`);
  console.log(results);
  return results;
}

export async function getCategoriesBySlug(slug) {
  const results = await client.fetch(`*[_type == "category" && slug.current == $slug]`, { slug });
  console.log(results);
  return results;
}
