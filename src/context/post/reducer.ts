import { Reducer } from "react";
import {
  PostAction,
  PostState,
  HANDLE_POST_CREATION,
  HandleCreatePost,
} from "context/post/type";
import { postData } from "context/post/constant";
import { getFromLocal, storeInLocal } from "utils/helper";

export const initialState: PostState = {
  allPostData: getFromLocal("postData")
    ? getFromLocal("postData")
    : storeInLocal("postData", postData),
};

const reducer: Reducer<PostState, PostAction> = (state, action) => {
  switch (action.type) {
    case HANDLE_POST_CREATION:
      const dataToSet = [action.postData, ...state.allPostData];
      storeInLocal("postData", dataToSet);
      return {
        ...state,
        allPostData: dataToSet,
      };
  }
};

export default reducer;

export const handleCreatePost = (postData: any): HandleCreatePost => ({
  type: HANDLE_POST_CREATION,
  postData,
});
