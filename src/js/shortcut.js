//           __                  __                __        _      
//    _____ / /_   ____   _____ / /_ _____ __  __ / /_      (_)_____
//   / ___// __ \ / __ \ / ___// __// ___// / / // __/     / // ___/
//  (__  )/ / / // /_/ // /   / /_ / /__ / /_/ // /_ _    / /(__  ) 
// /____//_/ /_/ \____//_/    \__/ \___/ \__,_/ \__/(_)__/ //____/  
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

  if (event.shiftKey && event.key === 'S') {
    document.querySelector('.sidebar-trigger').click();
    return;
  }

  const url = shortcuts[event.key];
  if (url) {
    console.log(`Shortcut key pressed: ${event.key}`);
    window.location.replace(url);
  }
});
