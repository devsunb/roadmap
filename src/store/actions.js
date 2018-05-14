import router from "../router";
import CONSTANT from "../constant";

export default {
  [CONSTANT.TOGGLE_SIDEBAR]: function (store, payload) {
    store.commit(CONSTANT.TOGGLE_SIDEBAR, payload);
    console.log(payload);
  }
};
