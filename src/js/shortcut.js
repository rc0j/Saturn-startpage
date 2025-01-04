//
// ========
// + Keyboard Shortcuts +
// ========
//

const shortcuts = {
  g: "https://github.com",
  y: "https://youtube.com",
  r: "https://reddit.com",
  p: "https://mail.proton.me",
  t: "https://twitter.com",
  c: "https://chatgpt.com",
  m: "https://mail.google.com",
  i: "https://instagram.com",
  G: "https://gitlab.com",
};

document.addEventListener("keydown", function (event) {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) || document.activeElement.isContentEditable) {
    return;
  }

  const url = shortcuts[event.key];
  if (url) {
    console.log(`Shortcut key pressed: ${event.key}`);
    window.location.replace(url);
  }
});
