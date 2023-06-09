import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getAllPosts = () => authenticatedHttp.get("/posts");
export const getPostDetail = (_id) => authenticatedHttp.get(`/posts/${_id}`);

export const getAllMyPosts = () => authenticatedHttp.get("/my-posts");

export const createPost = (post) => authenticatedHttp.post("/new-post", post);

export const editPost = ({postId, post}) => authenticatedHttp.patch(`/posts/${postId}`, post)

export const deletePost = (postId) => authenticatedHttp.delete(`/posts/${postId}`)