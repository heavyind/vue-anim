
const toNumberHelp = (v, o) => {
  return () => {
    if (typeof o === "number") {
      return o;
    } else if (typeof o === "object" && typeof o[v] !== "undefined") {
      return o[v];
    } else {
      return 0;
    }
  };
};

const toEnterNumber = toNumber("enter");

const toLeaveNumber = toNumber("leave");

const props = {
  duration: {
    type: [Object, Number]
  }
};

export default (Vue) => {
  return {
    render (h) {
      return h("div", "Sanity check");
    }
  };
};
