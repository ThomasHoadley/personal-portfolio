import { combineReducers } from "redux";

function newsReducer(state = {}, action) {
  return state;
}

const reducers = combineReducers({
  news: newsReducer
});
export default reducers;
