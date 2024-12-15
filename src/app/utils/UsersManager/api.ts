export const getUsersAPI = () => {
  return fetch(`https://dummyjson.com/users`).then((res) => res.json());
};

export const getSingleUserAPI = ({ id }: { id: string }) => {
  return fetch(`https://dummyjson.com/users/${id}`).then((res) => res.json());
};
