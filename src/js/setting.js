//                 __   __   _                     _      
//    _____ ___   / /_ / /_ (_)____   ____ _      (_)_____
//   / ___// _ \ / __// __// // __ \ / __ `/     / // ___/
//  (__  )/  __// /_ / /_ / // / / // /_/ /_    / /(__  ) 
// /____/ \___/ \__/ \__//_//_/ /_/ \__, /(_)__/ //____/  
//                                 /____/   /___/         

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
