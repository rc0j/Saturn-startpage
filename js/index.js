const determineGreet = (
  hours // Good morning/night text.
) =>
  (document.getElementById("greetings").innerText =
    `Good ${
      hours < 12
        ? "morning, "
        : hours < 18
        ? "afternoon, "
        : hours < 21 // After 21:00/9:00 display night instead.
        ? "evening, "
        : "night, "
    } ` + localStorage.getItem("user"));

// Get month:
determineGreet(new Date().getHours());

// Settings/Modal trigger + close button.
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".setting-button");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Time v2.0
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  );
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    cmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return " " + cday + " " + cnum + " " + cmonth;
}
// Set up the clock and date
document.getElementById("time").innerHTML =
  `It's ` + getDate() + `, ` + getTime();

// Open overlay menu
navy.addEventListener("click", openNav);
navyclose.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// Hide favorites, jQuery.

$(function () {
  var status = localStorage.getItem("favorites_hidden");
  if (status == "true") {
    $(".fav-container").css("display", "none");
    $(".hide-favorite").attr("checked", true);
  } else {
    $(".fav-container").css("display", "block");
    $(".hide-favorite").attr("checked", false);
  }
  $(".hide-favorite").click(function () {
    if (this.checked) {
      $(".fav-container").hide();
    } else {
      $(".fav-container").show();
    }
    localStorage.setItem("favorites_hidden", this.checked);
  });
});

// Hide searchbar
$(function () {
  var status = localStorage.getItem("search_hidden");
  if (status == "true") {
    $(".search_block").css("display", "none");
    $(".hide-search").attr("checked", true);
  } else {
    $(".search_block").css("display", "block");
    $(".hide-search").attr("checked", false);
  }
  $(".hide-search").click(function () {
    if (this.checked) {
      $(".search_block").hide();
    } else {
      $(".search_block").show();
    }
    localStorage.setItem("search_hidden", this.checked);
  });
});

// search_block

// Hide App row .2

$(function () {
  var status = localStorage.getItem("apps_row2_hidden");
  if (status == "true") {
    $(".apps_row2").css("display", "none");
    $(".hideapprow2").attr("checked", true);
  } else {
    $(".apps_row2").css("display", "block");
    $(".hideapprow2").attr("checked", false);
  }
  $(".hideapprow2").click(function () {
    if (this.checked) {
      $(".apps_row2").hide();
    } else {
      $(".apps_row2").show();
    }
    localStorage.setItem("apps_row2_hidden", this.checked);
  });
});

// Settings Navigation.
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// Saturn theme engine, powered by local storage and javascript.
// v2.0-pancake

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const spaceButton = document.getElementById("space");
const linkinParkButton = document.getElementById("linkin-park");
const darkv2Button = document.getElementById("darkv2");
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  body.classList.replace("space", "dark");
  body.classList.replace("linkin-park", "dark");
  body.classList.replace("darkv2", "dark");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  body.classList.replace("space", "light");
  body.classList.replace("linkin-park", "light");
  body.classList.replace("darkv2", "light");
  localStorage.setItem("theme", "light");
};

spaceButton.onclick = () => {
  body.classList.replace("dark", "space");
  body.classList.replace("light", "space");
  body.classList.replace("linkin-park", "space");
  body.classList.replace("darkv2", "space");
  localStorage.setItem("theme", "space");
};

linkinParkButton.onclick = () => {
  body.classList.replace("dark", "linkin-park");
  body.classList.replace("light", "linkin-park");
  body.classList.replace("space", "linkin-park");
  body.classList.replace("darkv2", "linkin-park");
  localStorage.setItem("theme", "linkin-park");
};

darkv2Button.onclick = () => {
  body.classList.replace("dark", "darkv2");
  body.classList.replace("light", "darkv2");
  body.classList.replace("space", "darkv2");
  body.classList.replace("linkin-park", "darkv2");
  localStorage.setItem("theme", "darkv2");
};

//username
$(document).ready(function () {
  // test - display previous stored username
  $("#Uname").val(localStorage.getItem("user"));

  $("#save").click(function () {
    var username = $("#userSet").val();
    if (typeof Storage !== "undefined") {
      // Store
      //localStorage.setItem("user", username);
      localStorage.user = username;
      // Retrieve
      //document.getElementById("Uname").innerHTML = localStorage.user;
      $("#Uname").val(localStorage.getItem("user"));
    } else {
      $("#Uname").val("Sorry, your browser does not support Web Storage...");
    }
  });
});

$(document).ready(function () {
  $("#save").click(function () {
    $("#sv-msg").text(
      "( ﾟｏ⌒): Username saved, please reload for these changes to take effect. "
    );
  });
});
