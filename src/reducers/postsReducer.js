var postsReducer = (oldPosts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return oldPosts;
  }
};

export default postsReducer;
