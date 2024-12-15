export const getBlogsAPI = () => {
  return fetch(`https://dummyjson.com/posts`).then((res) => res.json());
};

export const getSingleBlogAPI = ({ id }: { id: string }) => {
  return fetch(`https://dummyjson.com/posts/${id}`).then((res) => res.json());
};
