//
// ========
// + FAVORITES v1.79.0 +
// Original Source: https://codepen.io/4gray/pen/glGun
// Heavily modified and improve various things
// ========
//
$(document).ready(function () {
  var $ul = $("#fav-link");
  var $title = $("#title");
  var $url = $("#url");

  // Get links from local storage
  if (localStorage.getItem("vk-links")) {
    $ul.html(localStorage.getItem("vk-links"));
  }

  // Add new link
  $("#add").click(function () {
    // Add new item
    $("#fav-link").append(
      '<li class="fav-link"><a href="' +
        $url.val() +
        '">' +
        '<img loading="lazy" src="' +
        "https://unavatar.io/" +
        $url.val().replace(/^\/\/|^.*?:(\/\/)?/, "") +
        "?fallback=https://source.boringavatars.com/pixel/120/1337_user?colors=242424,2D2D2D,4A4E4A,242424,02060A" +
        '"/>' +
        " " +
        $title.val() +
        "</a>" +
        '<button class="removebtn" title="Delete favorite..."><i class="las la-trash-alt"></i></button>' +
        '<a class="hide_fav_bar" target="_blank" href="' +
        $url.val() +
        '">' +
        '<button class="newtabbtn" title="Open in new tab..."><i class="las la-external-link-alt"></i></button>' +
        "</a></li>"
    );

    // Save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());

    // Reset form
    $title.val("");
    $url.val("https://");
  });

  // Remove item
  $("#fav-link").on("click", ".removebtn", function () {
    $(this).parent().remove();
    // Save changes to localstorage
    localStorage.setItem("vk-links", $ul.html());
  });
});
// ========
// + FAVORITES Search [BETA] v2.0-cheesecake +
// ========
//
document.getElementById("searchfavorites").onkeyup = function () {
  var search = document.getElementById("searchfavorites").value.toLowerCase();
  var items = document.getElementById("content").getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var title = item.getElementsByTagName("a")[0].innerHTML.toLowerCase();
    if (title.indexOf(search) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
};

//
// ========
// + Show message when save button is pressed +
// ========
//
document.getElementById("add").onclick = function () {
  var save_notification = document.getElementById("saveMsgBar");
  save_notification.className = "show";
  setTimeout(function () {
    save_notification.className = save_notification.className.replace(
      "show",
      ""
    );
  }, 3000);
};
