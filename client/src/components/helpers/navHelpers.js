export function levelAvatar(level) {
  if (level === 0) {
    return "https://i.ibb.co/D5yHV1t/lvl-1.jpg";
  } else if (level === 1) {
    return "https://i.ibb.co/MC7dYWy/lvl-2.jpg";
  } else if (level === 2) {
    return "https://i.ibb.co/zGHmsk0/lvl-3.jpg";
  } else if (level > 2) {
    return "https://i.ibb.co/zGHmsk0/lvl-3.jpg";
  } else {
    return "https://i.ibb.co/zGHmsk0/lvl-3.jpg";
  }
}

export function levelName(level) {
  if (level === 0) {
    return "Earthling";
  } else if (level === 1) {
    return "Mini Martian";
  } else if (level === 2) {
    return "Moon Walker";
  } else if (level > 2) {
    return "Supreme Leader";
  } else {
    return "Not logged in";
  }
}