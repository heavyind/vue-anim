import { cfgDefault } from "./util/config";
import { 
  toNumber,
  toEnterNumber,
  toLeaveNumber,
  addClass,
  removeClass
} from "./util/helpers";


const nextFrame = (fn) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn);
  });
};

const makeClasses = (value) => {
  return {
    leaveTo: value.leaveTo ? value.leaveTo : `${value.name}-leave-to`,
    leaveFrom: value.leaveFrom ? value.leaveFrom : `${value.name}-leave-from`,
    enterTo: value.enterTo ? value.enterTo : `${value.name}-enter-to`,
    enterFrom: value.enterFrom ? value.enterFrom : `${value.name}-enter-from`
  };
};

const handleTransitionEnd = (el, cls) => {
  return () => {
    removeClass(el, cls);
    el.removeEventListener("transitionend", handleTransitionEnd);
  };
};

const toMs = (ms) => {
  return `${ms}ms`;
};

const attachCss = (type, el, value) => {
  if (value.delay) {
    const ms = toMs(toNumber(type, value.delay));
    el.style.transitionDelay = ms;
  }
  if (value.duration) {
    const ms = toMs(toNumber(type, value.duration));
    el.style.transitionDuration = ms;
  }
};

const enter = (el, value) => {

  attachCss("enter", el, value);

  const classes = makeClasses(value);
  removeClass(el, classes.leaveTo);
  addClass(el, classes.enterFrom);

  nextFrame(() => {
    addClass(el, classes.enterTo);
    removeClass(el, classes.enterFrom);
  });

  el.addEventListener("transitionend", handleTransitionEnd(el, classes.enterTo));
};

const leave = (el, value) => {

  attachCss("leave", el, value);

  const classes = makeClasses(value);
  addClass(el, classes.leaveFrom);

  nextFrame(() => {
    addClass(el, classes.leaveTo);
    removeClass(el, classes.leaveFrom);
  });
};

export default {
  install (Vue, _cfg) {
    
    const cfg = _cfg ? { ..._cfg, cfgDefault } : cfgDefault;

    Vue.directive(cfg.directiveName, {
      inserted (el, { arg, value, oldValue }) {
        logElement(el);
        const classes = makeClasses(value);
        if (arg) { enter(el, value); }
        else { addClass(el, classes.leaveTo); }
      },
      update (el, { arg, value, oldValue }) {
        if (arg) { enter(el, value); }
        else { leave(el, value); }
      },
      unbind (el, { arg, value, oldValue }) {

      }
    });

    Vue.directive("animLink", {
      inserted (l, b, v, o) {
      },
      update (l, b, v, o) {
      }
    });
  }
};
