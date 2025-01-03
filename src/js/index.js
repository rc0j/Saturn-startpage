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

const usernameInput = document.querySelector("#username");

usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim();
  if (username) {
    localStorage.setItem("user", username);
    determineGreet();
    usernameInput.classList.remove("is-danger");
    usernameInput.classList.add("is-success");
  } else {
    usernameInput.classList.remove("is-success");
    usernameInput.classList.add("is-danger");
  }
});

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
