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
    resetButton.classList.add("is-loading");
    resetButton.disabled = true;
    localStorage.clear();
    setTimeout(() => location.reload(), 3000);
  }
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
