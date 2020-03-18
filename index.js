import * as e from "./util/e";

export default {

  install(Vue, _cfg) {

    if (typeof _cfg === "undefined") {
      throw new Error(e.cfgUndefined);
    }

    if (typeof _cfg.store === "undefined") {
      throw new Error(e.cfgStoreUndefined);
    }
  }
}
