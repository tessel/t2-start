$(document).ready(function () {
  if (location.pathname == "/t2-start/") {
    var navLink = "a[href*='" + location.pathname + "index.html']";
  } else {
    var navLink = "a[href*='" + location.pathname + "']";
  }
  $(navLink).addClass("currentlink");
  $(navLink).parent("li").addClass("active");
});
