import client from './sanity';

// getOptions
export const getOptions = async () => {
  const query = '*[_type == "option"]';
  const options = await client.fetch(query);
  return options;
};

// getPostsByOption
export const getPostsByOption = async (option) => {
  let query;

  if (option === 'All') {
    query = '*[_type == "post"]';
  } else {
    query = `*[_type == "post" && "${option}" in options]`;
  }

  const posts = await client.fetch(query);
  console.log(posts);
  return posts;
};

// getAllCategories
export const getAllCategories = async () => {
  const query = '*[_type == "category"]';
  const categories = await client.fetch(query);
  return categories;
};

// searchPosts
export const searchPosts = async (search) => {
  const query = `*[_type == "post" && title match "${search}*"]`;
  const posts = await client.fetch(query);
  return posts;
};
