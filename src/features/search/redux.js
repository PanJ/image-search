import axios from "axios";
import config from "../../common/config";

const SEARCH_TYPE = "SEARCH_TYPE";
const SEARCH = "SEARCH";
const SEARCH_PENDING = "SEARCH_PENDING";
const SEARCH_FULFILLED = "SEARCH_FULFILLED";
const SEARCH_REJECTED = "SEARCH_REJECTED";

const initialState = {
  text: "",
  results: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TYPE:
      return { ...state, text: action.text };
    case SEARCH_PENDING:
      return { ...state, loading: true, results: [] };
    case SEARCH_FULFILLED:
      return { ...state, results: action.payload.data.results, loading: false };
    case SEARCH_REJECTED:
      return { ...state, results: [], loading: false };
    default:
      return state;
  }
};

export const searchType = text => ({
  type: SEARCH_TYPE,
  text
});

export const search = text => ({
  type: SEARCH,
  payload: axios.get(
    `https://api.unsplash.com/search/photos?query=${text}&client_id=${
      config.clientId
    }`
  )
});
