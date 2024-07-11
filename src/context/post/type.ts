export const HANDLE_POST_CREATION = "HANDLE_POST_CREATION";

export type HandleCreatePost = {
  type: typeof HANDLE_POST_CREATION;
  postData: any;
};

export type PostState = {
  allPostData: any;
};

export type PostAction = HandleCreatePost;
