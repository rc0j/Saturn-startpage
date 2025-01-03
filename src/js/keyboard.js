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
  c: "https://calendar.google.com",
  m: "https://mail.google.com",
  i: "https://instagram.com"
};

document.addEventListener("keydown", function (event) {
  if (event.key in shortcuts) {
    console.log(`Shortcut key pressed: ${event.key}`);
    window.location.replace(shortcuts[event.key]);
  }
});

