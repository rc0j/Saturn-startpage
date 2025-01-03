//
// ========
// + Keyboard Shortcuts +
// ========
//

var opnSetting = document.getElementById("open_settings");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 83 && event.shiftKey) {
    // Shift + S key
    opnSetting.click();
  }
});

// When pressing on ESC do certain expected actions
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    document.querySelector(".sidebar").classList.remove("open");
    document
      .querySelector(".fav_modal")
      .classList.remove("show-favorite-modal");
    // UnFocus Search Bar
    document.querySelector(".search-bar").blur();
  }
});

//
// ========
// + Apps Shortcut +
// ========
//

// Ctrl + Alt + G to open github.com
document.addEventListener("keyup", function (github) {
  if (github.key == "g" && github.altKey && github.ctrlKey) {
    window.location.replace("https://github.com");
  }
});

// Ctrl + Alt + Y to open youtube.com
document.addEventListener("keyup", function (youtube) {
  if (youtube.key == "y" && youtube.altKey && youtube.ctrlKey) {
    window.location.replace("https://youtube.com");
  }
});

// Ctrl + Alt + R to open reddit.com
document.addEventListener("keyup", function (reddit) {
  if (reddit.key == "r" && reddit.altKey && reddit.ctrlKey) {
    window.location.replace("https://reddit.com");
  }
});

// Ctrl + Alt + P to open protonmail.com
document.addEventListener("keyup", function (protonmail) {
  if (protonmail.key == "p" && protonmail.altKey && protonmail.ctrlKey) {
    window.location.replace("https://mail.proton.me");
  }
});

// Ctrl + Alt + T to open twitter.com
document.addEventListener("keyup", function (twitter) {
  if (twitter.key == "t" && twitter.altKey && twitter.ctrlKey) {
    window.location.replace("https://twitter.com");
  }
});

// Ctrl + Alt + C to open google_calendar
document.addEventListener("keyup", function (google_calendar) {
  if (
    google_calendar.key == "c" &&
    google_calendar.altKey &&
    google_calendar.ctrlKey
  ) {
    window.location.replace("https://calendar.google.com");
  }
});

// Ctrl + Alt + M to open mail.google.com
document.addEventListener("keyup", function (mail) {
  if (mail.key == "m" && mail.altKey && mail.ctrlKey) {
    window.location.replace("https://mail.google.com");
  }
});

// Ctrl + Alt + I to open instagram.com
document.addEventListener("keyup", function (instagram) {
  if (instagram.key == "i" && instagram.altKey && instagram.ctrlKey) {
    window.location.replace("https://instagram.com");
  }
});

// Ctrl + / to focus on searchbar
document.addEventListener("keyup", function (search) {
  if (search.key == "/" && search.ctrlKey) {
    document.querySelector(".search-bar").focus();
  }
});

// Ctrl + ArrowUp to click on se_icon
document.addEventListener("keyup", function (se_icon) {
  if (se_icon.key == "ArrowUp" && se_icon.ctrlKey) {
    document.querySelector(".se_icon").click();
  }
});
document.addEventListener("keyup", function (favModal) {
  if (favModal.keyCode == 90 && favModal.shiftKey) {
    document.querySelector(".favorite-button").click();
  }
});
