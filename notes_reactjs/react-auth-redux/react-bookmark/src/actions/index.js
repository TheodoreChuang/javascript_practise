// Action Creator returns Action

import LocalApi from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

// Async ActionCreator - able to return a function due to thunk middleware
export const fetchBookmarks = () => {
  return async (dispatch, getState) => {
    const response = await LocalApi.get("/bookmarks");

    dispatch({
      type: "BOOKMARKS_LIST",
      payload: response.data
    });
  };
};

// TODO: appendix new bookmark rather than replace entire array, not scalable
export const createBookmark = ({ title, url }) => {
  return async (dispatch, getState) => {
    const response = await LocalApi.post("/bookmarks", { title, url });

    dispatch({
      type: "BOOKMARKS_LIST",
      payload: response.data
    });
  };
};

export const updateBookmark = ({ _id, title, url }) => {
  return async (dispatch, getState) => {
    const response = await LocalApi.put(`/bookmarks/${_id}`, { title, url });

    dispatch({
      type: "BOOKMARKS_LIST",
      payload: response.data
    });
  };
};

export const destroyBookmark = bookmarkId => {
  return async (dispatch, getState) => {
    const response = await LocalApi.delete(`/bookmarks/${bookmarkId}`);

    dispatch({
      type: "BOOKMARKS_LIST",
      payload: response.data
    });
  };
};
