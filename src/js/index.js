//
// ========
// + Good Morning text +
// ========
//
const determineGreet = () => {
  const hours = new Date().getHours();
  const user = localStorage.getItem("user") || "";
  const greeting =
    hours < 12
      ? "morning"
      : hours < 18
      ? "afternoon"
      : hours < 21
      ? "evening"
      : "night";
  document.getElementById("greetings").innerText = `Good ${greeting}, ${user}.`;
};

determineGreet();

//
// ========
// + Time and month text +
// ========
//
const getTime = () => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  return `${hour}<span>:</span>${min}`;
};

const getDate = () => {
  const date = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const cmonth = months[date.getMonth()];
  const cday = days[date.getDay()];
  const cnum = date.getDate().toString().padStart(2, "0");
  return `${cday}, ${cnum} ${cmonth}`;
};

document.getElementById("date").innerHTML = getDate();
document.getElementById("time").innerHTML = getTime();

setInterval(() => {
  document.getElementById("time").innerHTML = getTime();
}, 60 * 1000);

//
// ========
// + Username feature v2 +
// ========
//
//

document.querySelector("#save").addEventListener("click", function () {
  var usernameInput = document.querySelector("#username_input");
  var username = usernameInput.value;
  if (username == "") {
    document.querySelector("#username_input").style.border =
      "2px solid var(--delete-warning-bg)";
  } else {
    localStorage.setItem("user", username);
    location.reload();
  }
});
//
// ========
// + *New* Wallpaper Feature +
// + v2 +
// ========
//
const imageUrlInput = document.querySelector("#image_url");
const processingBg = document.querySelector(".processing_bg");
const background_body = document.querySelector("body");
const inputFile = document.getElementById("imageupload");

document.querySelector("#save-image").addEventListener("click", () => {
  const imageUrlValue = imageUrlInput.value.trim();
  if (!imageUrlValue) {
    processingBg.innerHTML =
      '<i class="las la-exclamation-triangle"></i> Please enter a valid URL.';
    return;
  }
  processingBg.innerHTML =
    '<i class="las la-check-circle"></i> Background image has been successfully applied!';
  localStorage.setItem("image_url", imageUrlValue);
  localStorage.removeItem("imageupload");
  body.style.backgroundImage = `url(${imageUrlValue})`;
});

// Upload Image and Set as Background
inputFile.addEventListener("change", (event) => {
  const image = event.target.files[0];

  if (image.size / 1024 / 1024 >= 4) {
    processingBg.innerHTML =
      '<span style="color:var(--delete-warning-bg)"><i class="las la-exclamation-circle"></i> The selected image exceeds 4MB. Please choose a smaller file.</span>';
    return;
  }

  processingBg.innerHTML =
    '<i class="las la-check-circle"></i> Image uploaded and set as background successfully!';
  localStorage.removeItem("image_url");

  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("imageupload", reader.result);
    body.style.backgroundImage = `url(${reader.result})`;
  };
  reader.readAsDataURL(image);
});

// Set Background from LocalStorage
const savedImageUpload = localStorage.getItem("imageupload");
const savedImageUrl = localStorage.getItem("image_url");

if (savedImageUpload) {
  background_body.style.backgroundImage = `url(${savedImageUpload})`;
} else if (savedImageUrl) {
  background_body.style.backgroundImage = `url(${savedImageUrl})`;
}

// Delete Background
document.querySelector("#delete_custom_image").addEventListener("click", () => {
  if (!savedImageUpload && !savedImageUrl) {
    processingBg.innerHTML =
      '<i class="las la-exclamation-circle"></i> No custom background found to delete.';
    return;
  }

  if (confirm("Are you sure you want to remove the current background image?")) {
    localStorage.removeItem("image_url");
    localStorage.removeItem("imageupload");
    body.style.backgroundImage = "";
    imageUrlInput.style.width = "100%";
    document.querySelector("#copy-backgroundurl").style.display = "none";
    processingBg.innerHTML =
      '<i class="las la-check-circle"></i> Background image has been removed.';
  }
});

//
// ========
// + *New* Copy to clipboard * +
// ========

let copy_image_url = document.getElementById("copy-backgroundurl");

if (localStorage.getItem("image_url") == null) {
  document.querySelector("#copy-backgroundurl").style.display = "none";
  document.querySelector("#image_url").style.width = "100%";
} else {
  copy_image_url.addEventListener("click", () => {
    navigator.clipboard.writeText(localStorage.getItem("image_url"));
    document.querySelector("#copy-backgroundurl").innerHTML =
      '<i class="las la-clipboard-check"></i>';
  });
}
//

//
// ========
// + *New* Reset button  +
// ========
//

document.getElementById("reset_button").addEventListener("click", resetData);

function resetData() {
  const confirmationMessage = "⚠ Are you sure you want to reset all your data? This action cannot be undone.";
  const isConfirmed = confirm(confirmationMessage);

  if (isConfirmed) {
    const resetButton = document.getElementById("reset_button");
    resetButton.innerHTML = `
      <img class="loading-svg" src="/assets/img/loading-red.svg" alt="Loading">
      <span>Data erased. Reloading in 3 seconds...</span>
    `;
    localStorage.clear();
    setTimeout(() => location.reload(), 3000);
  }
}


//
// ========
// + UI Tweaks  +
// These features are not essential, but they make everything look better & feel better.
// ========
//

// UI Tweaks: Force saturn header to use white color.
document
  .querySelector("#force_white_color_header")
  .addEventListener("click", function () {
    if (localStorage.getItem("force_white_color_header")) {
      localStorage.removeItem("force_white_color_header");
      document.querySelector(".sat-header").style.color = "var(--sat-ids)";
      document.querySelector(".apps_list").style.color = "var(--sat-ids)";
      document.querySelector(".sidebar-trigger").style.color = "var(--sat-ids)";
    } else {
      localStorage.setItem("force_white_color_header", true);
      document.querySelector(".sat-header").style.color = "#fff";
      document.querySelector(".apps_list").style.color = "#fff";
      document.querySelector(".sidebar-trigger").style.color = "#fff";
    }
  });

if (localStorage.getItem("force_white_color_header")) {
  document.querySelector(".sat-header").style.color = "#fff";
  document.querySelector(".apps_list").style.color = "#fff";
  document.querySelector(".sidebar-trigger").style.color = "#fff";
}

// UI Tweak: Make all text bold

document.querySelector("#bold_text").addEventListener("click", function () {
  if (localStorage.getItem("bold_text")) {
    localStorage.removeItem("bold_text");
    document.querySelector("body").style.fontWeight = "normal";
  } else {
    localStorage.setItem("bold_text", true);
    document.querySelector("body").style.fontWeight = "600";
  }
});

if (localStorage.getItem("bold_text")) {
  document.querySelector("body").style.fontWeight = "600";
}

// UI Tweak: Use Sans Serif as default font
document.querySelector("#browser_font").addEventListener("click", function () {
  if (localStorage.getItem("browser_font")) {
    localStorage.removeItem("browser_font");
    document.querySelector("body").style.fontFamily = "var(--default-font)";
  } else {
    localStorage.setItem("browser_font", true);
    document.querySelector("body").style.fontFamily = "sans-serif";
  }
});

if (localStorage.getItem("browser_font")) {
  document.querySelector("body").style.fontFamily = "sans-serif";
}

document.getElementById("open_settings").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("open");
});

document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const trigger = document.getElementById("open_settings");

  if (!sidebar.contains(event.target) && event.target !== trigger) {
    sidebar.classList.remove("open");
  }
});

// Get all tab items
const tabItems = document.querySelectorAll(".settings-tab-item");

// Get all tab content panes
const tabPanes = document.querySelectorAll(".tab-pane");

// Function to switch tabs
function switchTab(event) {
  // Remove 'active' class from all tab items and panes
  tabItems.forEach((item) => item.classList.remove("active"));
  tabPanes.forEach((pane) => pane.classList.remove("active"));

  // Add 'active' class to the clicked tab item
  this.classList.add("active");

  // Get the target tab pane based on data-tab attribute
  const targetPaneId = this.getAttribute("data-tab");
  const targetPane = document.getElementById(targetPaneId);

  // Add 'active' class to the target tab pane
  targetPane.classList.add("active");
}

// Add click event listener to each tab item
tabItems.forEach((item) => item.addEventListener("click", switchTab));
