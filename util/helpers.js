
const whitespaceRe = /\s+/;

export const addClass = (el, cls) => {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRe).forEach(c => el.classList.add(c));
    } else {
      el.classList.add(cls);
    }
  } else {
    const cur = `${el.getAttribute("class") || ""}`;
    if (cur.indexOf(" " + cls + " ") < 0) {
      el.setAttribute("class", (cur + cls).trim());
    }
  }
};

export const removeClass = (el, cls) => {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRe).forEach(c => el.classList.remove(c));
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute("class");
    }
  } else {
    let cur = `${el.getAttribute("class") || ""}`;
    const tar = " " + cls + " ";
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, " ");
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute("class", cur);
    } else {
      el.removeAttribute("class");
    }
  }
};

export const toNumber = (type, o) => {
  if (typeof o === "number") {
    return o;
  } else if (typeof o === "object" && typeof o[type] !== "undefined") {
    return o[type];
  } else {
    return 0;
  }
};

export const toNumberHelp = (type) => {
  return (o) => {
    return toNumber(type, o);
  };
};

export const toEnterNumber = toNumberHelp("enter");

export const toLeaveNumber = toNumberHelp("leave");


