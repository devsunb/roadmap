import CONSTANT from "../constant";

export default {
  [CONSTANT.TOGGLE_SIDEBAR]: function (state, payload) {
    state.sidebar = payload;
  }
};
